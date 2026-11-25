const { test } = require('node:test')
const assert = require('node:assert/strict')
const { spawnSync } = require('node:child_process')
const path = require('node:path')

const ga = ['events', 'send', '--measurement-id', 'G-TEST', '--client-id', 'demo', '--event-name', 'example']
const hook = 'https://example.invalid/hooks/catch/synthetic-value'
const env = { GA4_ACCESS_TOKEN: '', ZAPIER_API_KEY: '', GA4_API_SECRET: '', ZAPIER_WEBHOOK_URL: '' }

function run(cli, args, extraEnv = {}, preload = '') {
  const flags = preload ? ['--import', 'data:text/javascript,' + encodeURIComponent(preload)] : []
  const res = spawnSync(process.execPath, [...flags, path.join(__dirname, '../clis', cli + '.js'), ...args],
    { env: { ...process.env, ...env, ...extraEnv }, encoding: 'utf8' })
  return { status: res.status, output: res.stdout + res.stderr }
}

test('GA4 preview takes its secret from the environment and masks it', () => {
  const { output } = run('ga4', [...ga, '--dry-run'], { GA4_API_SECRET: 'synthetic-value' })
  assert.equal(JSON.parse(output)._dry_run, true)
  assert.doesNotMatch(output, /synthetic-value/)
})

test('GA4 reports missing or legacy credentials without echoing argv', () => {
  assert.match(run('ga4', ga).output, /GA4_API_SECRET/)
  const result = run('ga4', [...ga, '--api-secret', 'synthetic-value'])
  assert.match(result.output, /GA4_API_SECRET/)
  assert.doesNotMatch(result.output, /synthetic-value/)
})

test('GA4 transport errors cannot echo the secret-bearing request URL', () => {
  const { status, output } = run('ga4', ga, { GA4_API_SECRET: 'synthetic-value' },
    'globalThis.fetch = async url => { throw Error(String(url)) }')
  assert.equal(status, 1)
  assert.match(output, /request failed/)
  assert.doesNotMatch(output, /synthetic-value/)
})

test('Zapier masks hook URLs supplied through the environment or the existing option', () => {
  for (const args of [[], ['--url', hook]]) {
    const { output } = run('zapier', ['hooks', 'send', ...args, '--dry-run', '--data', '{"example":true}'], { ZAPIER_WEBHOOK_URL: hook })
    const preview = JSON.parse(output)
    assert.deepEqual(preview.body, { example: true })
    assert.equal(preview._dry_run, true)
    assert.doesNotMatch(output, /synthetic-value|example\.invalid/)
  }
})

test('account API commands still require the account credential', () => {
  for (const [cli, args, credential] of [
    ['ga4', ['reports', 'run', '--property', '123', '--dry-run'], 'GA4_ACCESS_TOKEN'],
    ['zapier', ['profile', 'me', '--dry-run'], 'ZAPIER_API_KEY'],
  ]) {
    const result = run(cli, args)
    assert.equal(result.status, 1)
    assert.match(result.output, new RegExp(credential))
    assert.equal(JSON.parse(run(cli, args, { [credential]: 'offline' }).output)._dry_run, true)
  }
})

test('Catch Hook transport failures use a generic diagnostic', () => {
  const { status, output } = run('zapier', ['hooks', 'send', '--data', '{}'],
    { ZAPIER_WEBHOOK_URL: hook },
    'globalThis.fetch = async url => { throw Error(String(url)) }')
  assert.equal(status, 1)
  assert.match(output, /Catch Hook request failed/)
  assert.doesNotMatch(output, /synthetic-value|example\.invalid/)
})

test('credential-specific routes submit the expected body without following redirects', () => {
  const mock = `globalThis.fetch = async (_url, init) => {
    if (init.method !== 'POST' || init.redirect !== 'error') throw Error('Unexpected request options')
    return new Response(init.body, { status: 200 })
  }`
  const event = run('ga4', ga, { GA4_API_SECRET: 'synthetic-value' }, mock)
  assert.equal(event.status, 0)
  assert.equal(JSON.parse(event.output).events[0].name, 'example')
  const call = run('zapier', ['hooks', 'send', '--data', '{"example":true}'], { ZAPIER_WEBHOOK_URL: hook }, mock)
  assert.equal(call.status, 0)
  assert.deepEqual(JSON.parse(call.output), { example: true })
})

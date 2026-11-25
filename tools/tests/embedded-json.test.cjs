const assert = require('node:assert/strict')
const { test } = require('node:test')
const fs = require('node:fs')
const path = require('node:path')
const { renderReview } = require('../../skills/ad-creative/scripts/render-review.cjs')

test('review JSON round-trips all text without raw markup in the data element', () => {
  const data = { 'size < width': 'Price < $5, literal $& and <sample> text', concepts: [] }
  const html = renderReview(data)
  const match = html.match(/<script type="application\/json" id="review-data">([\s\S]*?)<\/script>/)
  assert.ok(match)
  assert.doesNotMatch(match[1], /</)
  assert.deepEqual(JSON.parse(match[1]), data)
  assert.equal(html.split('id="review-data"').length, 2)
})

test('the Next.js example encodes script data and preserves JSON values', () => {
  const doc = fs.readFileSync(path.join(__dirname, '../../skills/schema/references/schema-examples.md'), 'utf8')
  const serialize = schema => JSON.stringify(schema).replace(/</g, "\\u003c")
  const expression = serialize.toString().split(' => ')[1]
  assert.ok(doc.includes('{ __html: ' + expression + ' }'))
  const product = { name: 'Width < 5' }
  assert.doesNotMatch(serialize(product), /</)
  assert.deepEqual(JSON.parse(serialize(product)), product)
})

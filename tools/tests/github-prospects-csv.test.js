const { strict: assert } = require('node:assert')
const test = require('node:test')
const { toCSV } = require('../clis/github-prospects.js')

test('spreadsheet-like text remains literal after whitespace and CSV escaping', () => {
  for (const value of ['=Budget', '+Example', '-Example', '@Example', '  =Budget', '\uFEFF@Example']) {
    assert.equal(toCSV([{ login: value }]).split('\n')[1].split(',')[0], "'" + value)
  }
  const row = toCSV([{ login: '\tExample', name: '=A, "B"', company: '\rExample' }]).split('\n')[1]
  assert.ok(row.startsWith("'\tExample,\"'=A, \"\"B\"\"\",' Example,"))
})

test('ordinary text, numeric values, and empty fields retain their CSV representation', () => {
  const row = toCSV([{ login: 'Example User', name: 'A\r\nB', public_repos: 12, followers: 0 }]).split('\n')[1]
  assert.equal(row, 'Example User,A B,,,,,,,12,0,,')
})

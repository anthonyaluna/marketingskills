const fs = require('node:fs')
const path = require('node:path')

function renderReview(data) {
  const template = fs.readFileSync(path.join(__dirname, '../assets/creative-review-template.html'), 'utf8')
  const startTag = '<script type="application/json" id="review-data">'
  const start = template.indexOf(startTag)
  const end = template.indexOf('</script>', start + startTag.length)
  if (start < 0 || end < 0 || template.indexOf(startTag, start + 1) >= 0) {
    throw new Error('Expected one review data block in the template')
  }

  const serialized = JSON.stringify(data, null, 2).replace(/</g, '\\u003c')
  return template.slice(0, start + startTag.length) + '\n' + serialized + '\n' + template.slice(end)
}

if (require.main === module) {
  const [input, output] = process.argv.slice(2)
  if (!input || !output) {
    console.error('Usage: node render-review.cjs project.json review.html')
    process.exitCode = 1
  } else {
    const data = JSON.parse(fs.readFileSync(input, 'utf8'))
    fs.writeFileSync(output, renderReview(data))
  }
}

module.exports = { renderReview }

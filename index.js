const asciidoctor = require('@asciidoctor/core')()

const doc = asciidoctor.loadFile('sample.adoc', { 'safe': 'safe' })
const html = doc.convert()

// console.log(html)

const striptags = require('striptags');
text = striptags(html)
plain = text.replace(/\r?\n/g, '')

console.log(plain)

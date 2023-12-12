const fileSystem = require('node:fs')

const text = fileSystem.readFileSync('./file-text.txt', 'utf-8')
console.log('text:', text)

console.log('Do things while reading the file')

const fileSystem = require('node:fs')

fileSystem.readFile('./file-text.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log(err.stack)
  }
  console.log('text:', text)
})

console.log('Do things while reading the file')

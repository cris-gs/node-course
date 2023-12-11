const fileSystem = require('node:fs/promises')

fileSystem.readFile('./file-text.txt', 'utf-8')
  .then(text => {
    console.log('text:', text)
  })

console.log('Do things while reading the file')

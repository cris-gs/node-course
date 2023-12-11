const fileSystem = require('node:fs')

fileSystem.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error reading directory: ', err)
    }
  })

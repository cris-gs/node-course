const { readFile } = require('node:fs/promises')

Promise.all([
    readFile('./file-text.txt', 'utf-8')
]).then(([text]) => {
    console.log(text)
})


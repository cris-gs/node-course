const path = require('node:path')

//Folder separator bar according to OS
console.log('This is the folder separator used for your SO:', path.sep)

// Join paths whit path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Get file name from path
const base = path.basename('/tmp/secret-files/password.txt')
console.log(base)

const fileName = path.basename('/tmp/secret-files/password.txt', '.txt')
console.log(fileName)

//Get file extension
const extension = path.extname('my.super.image.jpg')
console.log(extension)
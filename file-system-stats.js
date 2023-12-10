const fileSystem = require('node:fs')

const stats = fileSystem.statSync('./file-text.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)
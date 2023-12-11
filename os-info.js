const os = require('node:os')

console.log('Operating system information:')
console.log('-----------------------------')

console.log('> Operative system name:', os.platform())
console.log('> Operative system version', os.release())
console.log('> Architecture:', os.arch())
console.log('> CPUs', os.cpus())
console.log('> Free memory:', os.freemem() / 1024 / 1024)
console.log('> Total memory:', os.totalmem() / 1024 / 1024)
console.log('> Uptime:', os.uptime() / 60 / 60)
console.log('-----------------------------')

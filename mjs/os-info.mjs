import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Operating system information:')
console.log('-----------------------------')

console.log('> Operative system name:', platform())
console.log('> Operative system version', release())
console.log('> Architecture:', arch())
console.log('> CPUs', cpus())
console.log('> Free memory:', freemem() / 1024 / 1024)
console.log('> Total memory:', totalmem() / 1024 / 1024)
console.log('> Uptime:', uptime() / 60 / 60)
console.log('-----------------------------')
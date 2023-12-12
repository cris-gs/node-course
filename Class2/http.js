const http = require('node:http') // protocolo HTTP
const fileSystem = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received', req.url)
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/image') {
    fileSystem.readFile('./z8rwvdfvbztb1.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contact') {
    res.end('Contact')
  } else {
    res.statusCode = 400 // OK
    res.end('404')
  }
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})

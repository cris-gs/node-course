import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'


const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

// app.get('/movies/page/:pageNumber', (req, res) => {
//   const { pageNumber } = req.params
//   let startValue = 0
//   if (pageNumber > 1){
//       startValue = ((pageNumber - 1)*10)-1
//   }
//   const moviesInPage = movies.slice(startValue, (pageNumber*10)-1)
//   if (moviesInPage) return res.json(moviesInPage)
//   res.status(404).json({ message: 'Movie not found' })
// })

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
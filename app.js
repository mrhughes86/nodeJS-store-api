const express = require('express')
const app = express()

const notFoundMiddleWare = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// Middleware
app.use(express.json())

app.get('/', (req, res) =>{
  res.send('<h1>Store API</h1><a href="/app/v1/products">Products Route</a>')
})

// Product routes
app.use(notFoundMiddleWare)
app.use(errorMiddleware)

//PORT
const port = process.env.PORT || 3000

const start = async () => {
  try {
    // Connect DB
    app.listen(port, console.log(`Listening on port ${port}..`))
  } catch (error) {
      console.log(error)
  }
}

start()
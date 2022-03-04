require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

const notFoundMiddleWare = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// Middleware
app.use(express.json())

//Routes

app.get('/', (req, res) =>{
  res.send('<h1>Store API</h1><a href="/app/v1/products">Products Route</a>')
})

app.use('/api/v1/products', productRouter )

// Product routes
app.use(notFoundMiddleWare)
app.use(errorMiddleware)

//PORT
const port = process.env.PORT || 3000

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening on port ${port}..`))
  } catch (error) {
      console.log(error)
  }
}

start()
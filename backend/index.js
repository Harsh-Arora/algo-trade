const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRoute = require('./routes/auth')

// Initializing express
const app = express()
//PORT
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/algoTrade', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info('DB connected')
  })
  .catch((error) => {
    console.error('DB connection error')
  })

// Root
app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/auth', authRoute)

app.listen(port)

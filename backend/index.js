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
try {
  mongoose.connect(
    'mongodb+srv://harsh:harsh@123@cluster0.7qyv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB is connected')
  )
} catch (e) {
  console.log('could not connect')
}

// Root
app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/auth', authRoute)

app.listen(port)

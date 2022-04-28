const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRoute = require('./routes/auth')
const pythonRoute = require('./routes/python')
const runPy = require('./js/runPy')

// Initializing express
const app = express()
//PORT
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// MongoDB connection
// mongoose
//   .connect('mongodb://localhost:27017/algoTrade', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.info('DB connected')
//   })
//   .catch((error) => {
//     console.error('DB connection error')
//   })

// Root
app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/auth', authRoute)
app.use('/script', pythonRoute)

// UNCOMMENT THE CODE BELOW AFTER SETTING THE NEW TIME
// DATE FORMAT - new Date(YEAR, MONTH{0-11}, DATE, HH, MM)
// let remainingTime = new Date(2022, 3, 24, 12, 43).getTime() - Date.now()

// setTimeout(() => {
//   console.log('Its time!')
//   runPy()
// }, remainingTime)

app.listen(port)

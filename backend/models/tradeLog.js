const mongoose = require('mongoose')

const tradeLogs = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  entry: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('tradeLogs', tradeLogs, 'tradeLogs')

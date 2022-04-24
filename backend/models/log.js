const mongoose = require('mongoose')

const logs = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  entry: {
    type: Array,
    required: true,
  },
})

module.exports = mongoose.model('logs', logs, 'logs')

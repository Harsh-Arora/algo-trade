const mongoose = require('mongoose')

const users = new mongoose.Schema({
  // userType: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  aadharNumber: {
    type: String,
    required: true,
  },

  mobileNumber: {
    type: String,
    required: true,
  },

  kotakUsername: {
    type: String,
    required: true,
  },

  kotakPassword: {
    type: String,
    required: true,
  },

  kotakAccessToken: {
    type: String,
    required: true,
  },

  kotakConsumerSecret: {
    type: String,
    required: true,
  },

  kotakConsumerKey: {
    type: String,
    required: true,
  },

  registrationDate: {
    type: Date,
    required: false,
  },
})

module.exports = mongoose.model('users', users, 'users')

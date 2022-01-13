const mongoose = require('mongoose')

const users = new mongoose.Schema({
  // userType: {
  //   type: String,
  //   required: true,
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  dateOfBirth: {
    type: Date,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
  kotakPassword: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  kotakAPIkey: {
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
  mobileNumber: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('users', users, 'users')

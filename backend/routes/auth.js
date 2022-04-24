const express = require('express')
const router = express()
const mongoose = require('mongoose')
const User = require('../models/user')
const JWT = require('jsonwebtoken')

router.post('/login', (req, res) => {
  let { email, password } = req.body

  User.findOne({ email: email, password: password })
    .then((user) => {
      const token = getToken(user)
      return res.send({ message: 'VALID', token: token })
    })
    .catch((error) => {
      console.error(`user with ${email} does not exist`)
      return res.send({ message: 'INVALID' })
    })
})

router.post('/register', (req, res) => {
  let {
    name,
    email,
    password,
    kotakPassword,
    kotakAccessToken,
    aadharNumber,
    kotakConsumerSecret,
    kotakConsumerKey,
    mobileNumber,
    kotakUsername,
  } = req.body

  let user = new User({
    name,
    email,
    password,
    // registrationDate,
    kotakPassword,
    aadharNumber,
    kotakAccessToken,
    kotakUsername,
    kotakConsumerSecret,
    kotakConsumerKey,
    mobileNumber,
  })
  user
    .save()
    .then(() => {
      const token = getToken(user)
      return res.send({ message: 'VALID', token: token })
    })
    .catch((error) => {
      console.error(error)
      return res.send({ message: 'INVALID' })
    })
})

const getToken = (user) => {
  return JWT.sign(
    {
      email: user.email,
    },
    'algoTradeToken',
    {
      expiresIn: '24h',
    }
  )
}

module.exports = router

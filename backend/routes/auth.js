const express = require('express')
const router = express()
const mongoose = require('mongoose')
const User = require('../models/user')
const JWT = require('jsonwebtoken')

router.post('/login', async (req, res) => {
  let { email, password } = req.body

  User.findOne({ email: email, password: password })
    .then((user) => {
      console.log(user)
      console.info(`user with email : ${email} was found successfully`)
    })
    .catch((error) => {
      console.error(`user with ${email} does not exist`)
      return res.status(404).send(`user with ${email} does not exist`)
    })
})

router.post('/signup', (req,res)=>{
  let { firstName, lastName, email, password, dateOfBirth, registrationDate, kotakPassword, aadharNumber, kotakAPIkey, kotakConsumerSecret, kotakConsumerKey, mobileNumber} = req.body
  let user = new User({
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    registrationDate,
    kotakPassword,
    aadharNumber,
    kotakAPIkey,
    kotakConsumerSecret,
    kotakConsumerKey,
    mobileNumber,
  })
  user
    .save()
    .then(() => {
      const token = getToken(user)
      return res.status(200).send({ user, token })
    })
    .catch((error) => {
      console.error(error)
      return res.status(500).send('Error')
    })  
})

const getToken = (user) => {
  return JWT.sign(
    {
      email: user.email,
    },
    'algoTradeToken',
    {
      expiresIn: '10h',
    }
  )
}

module.exports = router

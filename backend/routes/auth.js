const express = require('express')
const router = express()
const mongoose = require('mongoose')
const User = require('../models/user')

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

module.exports = router

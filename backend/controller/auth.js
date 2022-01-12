const express = require('express')
const mongoose = require('mongoose')

exports.logIn = (req, res) => {
  let { email, pass } = req.body

  await db
    .collection('users')
    .findOne({ email: email, password: pass })
    .then((result) => {
      if (result) {
        res.send('Login success')
      } else {
        res.send('Login unsuccessful')
      }
    })
}

const express = require('express')
const router = express()
const User = require('../models/user')
const Logs = require('../models/log')
const { PythonShell } = require('python-shell')

router.get('/runPython', (req, res) => {
  User.find().then((users) => {
    users.map((user, key) => {
      let options = {
        args: [user.name, user.email],
      }

      PythonShell.run('./scripts/script.py', options, (err, result) => {
        if (err) throw err
        console.log(result)

        let date = new Date()
        let entry = result[0]
        let email = user.email

        let log = new Logs({
          email,
          date,
          entry,
        })

        log.save().then(() => {
          console.log('entry saved!')
        })

        // res.send(result)
      })
    })
  })
})

module.exports = router

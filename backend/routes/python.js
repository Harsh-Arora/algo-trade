const express = require('express')
const router = express()
const User = require('../models/user')
const Logs = require('../models/log')
const { PythonShell } = require('python-shell')

const getPromiseForScript = function (options) {
  return new Promise(resolve => {
    PythonShell.run('./scripts/script.py', options, (err, result) => {
      if (!err)
        console.error(err);

      console.log(result);

      let date = new Date()
      let entry = result[0]
      let email = options.args[1]

      // Disabling mongo db components
      // let log = new Logs({
      //   email,
      //   date,
      //   entry,
      // })

      // log.save().then(() => {
      //   console.log('entry saved!')
      // })

      resolve(result)
    })
  })
}

router.get('/runPython', (req, res) => {

  let writeToResponse = (message) => res.write("\nProcessing " + message);
  let promiseList = [];

  // Hardcoded user list
  const users = [
    {name: "Akash Raj Singh", email: "ars.150697@gmail.com"},
    {name: "Akash Raj", email: "akashraj@google.com"},
  ]

  users.map((user) => {
    let options = {
      args: [user.name, user.email],
    }

    let promise = getPromiseForScript(options)
    promise.then(writeToResponse);
    promiseList.push(promise);

  })

  Promise.all(promiseList).then(_ => res.end())
})

module.exports = router

const express = require('express')
const router = express()
const User = require('../models/user')
const Logs = require('../models/log')
const { PythonShell } = require('python-shell')

router.get('/runPython', (req, res) => {

  const users = [
    {name: "Akash", email: "ars.150697@gmail.com"},
    {name: "Akash Raj", email: "akashraj@google.com"}
  ];

  const promises = [];

  const resolveFunction = function (val) {
    return val;
  }

  users.map((user, key) => {
    let options = {
      args: [user.name, user.email],
    }

    const p = new Promise(function(resolve, _) {
      resolve("\nProcessing complete for User " + options.args);
    });

    p.then(resolveFunction);

    promises.push(p);

  });

  Promise.all(promises).then((values) => {
    values.forEach(val => res.write(val));
    res.end();
  });
})

module.exports = router

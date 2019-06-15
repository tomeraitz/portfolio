const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/appStarted', function (req, res) {
    res.send("appStarted")
})



router.get('/users', function (req, res) {
    User
    .find({})
    .exec(function (err, users) {
        res.send(users)
    })
})

router.post('/user', function (req, res) {
    let data = req.body
    let user = new User(data)
    user.save()
    res.send(user)
})

module.exports = router
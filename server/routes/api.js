const User = require('../models/User')

class Api {
    constructor(router) {
        this.router = router;
    }
    appStarted() {
        this.router.get('/appStarted', function (req, res) {
            res.send("appStarted")
        })
    }
    getUsers() {
        this.router.get('/users', (req, res) => {
            User
                .find({})
                .exec(function (err, users) {
                    res.send(users)
                })
        })
    }
    addUser() {
        this.router.post('/user', (req, res) => {
            let data = req.body
            let user = new User(data)
            user.save()
            res.send(user)
        })
    }
}
module.exports = Api
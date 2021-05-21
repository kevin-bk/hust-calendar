const Users = require('../models/Users');

class LoginController {

    //  [GET] /login
    index(req, res, next) {
        if (req.session.userId) res.redirect("/app");
        res.render('page/login', {
            layout: 'blank'
        });
    }

    // [POST] /login
    login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        Users.Authenticate(email, password, function(userId) {
            req.session.userId = userId;
            res.redirect("/app");
        })
    }

    // [GET] /login/logout
    logout(req, res, next) {
        req.session.destroy(function(err) {
            res.redirect("/login");
        })
    }

    // [POST] /login/signup
    signup(req, res, next) {
        Users.createUser(req.body, function(userId) {
            req.session.userId = userId;
            res.redirect("/app");
        })
    }
}

module.exports = new LoginController;

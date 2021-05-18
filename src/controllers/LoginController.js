const Users = require('../models/Users');

class LoginController {

    //  [GET] /login
    index(req, res, next) {
        res.render('page/login', {
            layout: 'blank'
        });
    }

    // [POST] /login
    login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        Users.Authenticate(email, password, function(result) {
            req.session.userId = email;
            res.redirect("/app");
        })
    }
}

module.exports = new LoginController;

const Users = require('../models/Users');

class LoginController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/login');
    }

    // [POST] /
    login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        Users.findOne({ email: email })
            .exec(function (err, user) {
                if (err) {
                    return callback(err);
                } else if (!user) {
                    res.send('user not found');
                }
                
            });
    }
}

module.exports = new LoginController;

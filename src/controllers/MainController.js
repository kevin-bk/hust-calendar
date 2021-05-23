const UserModel = require('../models/Users');

class MainController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/home', {
            layout: 'blank'
        });
    }

    account(req, res) {
        res.render('page/account', {
            layout: 'blank'
        });
    }

    // [GET] /app/planner
    events(req, res, next) {
        res.render('page/events');
    }

    app(req, res, next) {
        res.render('page/app');
    }

    // [GET] /app/followed/events
    followedEvents(req, res) {
        res.render('page/followed-events');
    }

    followedUsers(req, res) {
        res.render('page/followed-users');
    }

    updateAccount(req, res) {
        UserModel.update(req.session.userId, req.body, function(success) {
            // console.log(req.body);/
            res.redirect('/account')
        })
    }

    user(req, res) {
        res.render('page/user');
    }
}

module.exports = new MainController;

const Users = require('../models/Users');

class MainController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/home', {
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
}

module.exports = new MainController;

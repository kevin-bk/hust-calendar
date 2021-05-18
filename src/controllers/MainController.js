const Users = require('../models/Users');

class MainController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/home', {
            layout: 'blank'
        });
    }
    
    // [GET] /app/planner
    planner(req, res, next) {
        res.render('page/planner');
    }

    app(req, res, next) {
        res.render('page/app');
    }
}

module.exports = new MainController;

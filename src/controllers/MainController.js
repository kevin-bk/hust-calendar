const Users = require('../models/Users');

class MainController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/home');
    }
    
    planner(req, res, next) {
        res.render('page/planner');
    }
}

module.exports = new MainController;

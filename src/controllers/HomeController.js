const Users = require('../models/Users');

class HomeController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/home');
    }
    
}

module.exports = new HomeController;

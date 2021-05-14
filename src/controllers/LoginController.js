class LoginController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/login');
    }
    
}

module.exports = new LoginController;

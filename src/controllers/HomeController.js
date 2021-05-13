const Users = require('../models/Users');

class HomeController {

    //  [GET] /
    index(req, res, next) {
        res.render('home');
    }
    
    test(req, res, next) {
        let user = {
            username:'Truong'
        }
        let User = new Users(user);
        console.log(User);
        User.save()
            .then(() => res.send('Done!'))
            .catch(err => console.log('err'));
    }
    
}

module.exports = new HomeController;

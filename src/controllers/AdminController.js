const AdminModel = require('../models/Admin');
const UserModel = require('../models/Users');

class AdminController {

    dashboard(req, res, next) {
        res.render('admin/dashboard', {
            layout: 'blank'
        })
    }

    //  [GET] /admin/login
    index(req, res, next) {
        if (req.session.admin) res.redirect("/admin/dashboard");
        res.render('admin/login', {
            layout: 'blank'
        });
    }

    // [POST] /admin/login
    login(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        AdminModel.Authenticate(username, password, function(id) {
            req.session.admin = 1;
            res.redirect("/admin/dashboard");
        })
    }

    // [GET] /admin/logout
    logout(req, res, next) {
        req.session.destroy(function(err) {
            res.redirect("/admin/login");
        })
    }

    lockUser(req, res) {
        UserModel.delete(req.params.id, function() {
            res.redirect('back');
        })
    }

    unLock(req, res) {
        UserModel.restore(req.params.id, function() {
            res.redirect('back');
        })
    }
}

module.exports = new AdminController;

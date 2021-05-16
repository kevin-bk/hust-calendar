const Users = require('../models/Users');

class MainController {

    //  [GET] /
    index(req, res, next) {
        res.render('page/home');
    }
    
    // [GET] /app/planner
    planner(req, res, next) {
        res.render('page/planner', {
            layout: 'app'
        });
    }

    // [GET] /app/todo-list
    // todoList(req, res, next) {
    //     res.render('page/todo', {
    //         layout: 'app'
    //     });
    // }
}

module.exports = new MainController;

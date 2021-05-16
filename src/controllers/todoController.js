const Todos = require('../models/Todos');

class todoController {

    //  [GET] /
    // index(req, res, next) {
    //     res.render('page/home');
    // }
    
    // // [GET] /app/planner
    // planner(req, res, next) {
    //     res.render('page/planner', {
    //         layout: 'app'
    //     });
    // }

    // [GET] /app/todo-list
    index(req, res, next) {
        res.render('page/todo', {
            layout: 'app'
        });
    }
}

module.exports = new todoController;
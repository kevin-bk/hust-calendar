const Todo = require('../models/schemas/Todos');


var data = [{content: 'Đi chơi', done: false}, {content: 'Uống sữa', done: true}];
class todoController {

    index(req, res, next) {
        Todo.find().sort({createdAt: -1}).lean()
            .then( (result) =>{
                console.log(result);
                res.render('page/todo', {
                    todos: result,
                    layout: 'app'
                });
            })
    }
    create(req,res, next) {
        const todo = new Todo(req.body);
        todo['done'] = false;
        todo.save()
            .then( (result)=>{
                res.redirect('/app/todo-list');
            })
            .catch( (err)=>{
                console.log(err)
            })
    }
}

module.exports = new todoController;
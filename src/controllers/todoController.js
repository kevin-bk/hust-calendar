const Todo = require('../models/schemas/Todos');


class todoController {

    index(req, res, next) {
        Todo.find().sort({createdAt: -1}).lean()
            .then( (result) =>{
                res.render('page/todo', {
                    todos: result
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
    delete(req,res, next) {
        const id = req.params.id;
        Todo.findByIdAndDelete(id)
        .then(result => {
          res.json({ redirect: '/app/todo-list' });
        })
        .catch(err => {
          console.log(err);
        });
    }
}
module.exports = new todoController;

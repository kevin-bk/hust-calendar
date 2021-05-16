const Todos = require('./schemas/Todos');

module.exports = {
    getAllTodos: function(callback) {
        Todos.find({})
            .then(data => callback(data));
    },

    // getUserById: function(id, callback) {
    //     Users.find({_id : id})
    //         .then(data => callback(data));
    // }
}

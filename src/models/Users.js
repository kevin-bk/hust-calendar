const Users = require('./schemas/Users');

module.exports = {

    Authenticate: function(email, password, callback) {
        Users.findOne({ email: email, password: password })
            .then(user => {
                callback(true);
            })
    },

    getAllUsers: function(callback) {
        Users.find({})
            .then(data => callback(data));
    },

    getUserById: function(id, callback) {
        Users.find({_id : id})
            .then(data => callback(data));
    }
}

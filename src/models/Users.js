const Users = require('./schemas/Users');

module.exports = {
    getAllUsers: function(callback) {
        Users.find({})
            .then(data => callback(data));
    },

    getUserById: function(id, callback) {
        Users.find({_id : id})
            .then(data => callback(data));
    }
}

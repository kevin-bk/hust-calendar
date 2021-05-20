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
    },

    createUser: function(user, callback) {
        User = new Users(user);
        User.save()
            .then(() => callback());
    },

    updateUser: function(userID, data, callback) {
        Users.updateOne({ _id: userID }, data)
            .then(() => callback());
    }
}

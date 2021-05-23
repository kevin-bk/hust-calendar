const Users = require('./schemas/Users');

module.exports = {

    Authenticate: function(email, password, callback) {
        Users.findOne({ email: email, password: password })
            .then(user => {
                callback(user._id);
            })
            .catch(err => callback(false));
    },

    getAll: function(callback) {
        Users.find({})
            .then(data => callback(data));
    },

    getById: function(id, callback) {
        Users.find({_id : id})
            .then(data => callback(data));
    },

    createUser: function(user, callback) {
        User = new Users(user);
        User.save()
            .then(user => callback(user._id))
            .catch(err => console.log(err));
    },

    update: function(userID, data, callback) {
        Users.updateOne({ _id: userID }, data)
            .then(() => callback(true));
    },

    follow: function(selfID, userID, callback) {
        Users.updateOne(
            { _id: selfID, followUsers: {$ne: userID}},
            { $push: {followUsers: userID} }
        )
        .then(() => callback())
        .catch(() => callback());
    },

    unFollow: function(selfID, userID, callback) {
        Users.updateOne(
            { _id: selfID},
            { $pull: {followUsers: userID} }
        )
        .then(() => callback())
        .catch(() => callback());
    },

    isFollow: function(selfID, userID, callback) {
        Users.find({ _id: selfID, followUsers: userID})
            .then(users => callback(users))
            .catch(() => callback(false));
    },

    delete: function(userId, callback) {
        Users.delete({ _id: userId})
            .then(() => callback())
            .catch(() => callback());
    },

    getAllWithDelete: function(callback) {
        Users.findWithDeleted({}) 
            .then(users => callback(users))
            .catch(() => callback(false));
    },

    restore: function(userId, callback) {
        Users.restore({ _id: userId})
            .then(() => callback());
    },

    search: function(key, callback) {
        Users.find({ name: key})
            .then(users => callback(users))
            .catch(() => callback(false));
    }
}

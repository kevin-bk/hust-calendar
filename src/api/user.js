const Users = require('../models/Users');

class UserApi {

    // Get all users
    getAllUsers(req, res, next) {
        Users.getAll(function(data) {
            res.json(data);
        })
    }

}

module.exports = new UserApi;

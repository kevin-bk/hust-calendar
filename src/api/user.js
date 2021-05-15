const Users = require('../models/Users');

class UserApi {

    // Get all users
    getAllUsers(req, res, next) {
        Users.getAllUsers(function(data) {
            res.json(data);
        })
    }
    
}

module.exports = new UserApi;

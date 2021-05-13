const Users = require('../models/Users');

class UserApi {

    // Get all users
    getAllUsers(req, res, next) {
        Users.find({})
            .then(users => res.json(users))
            .catch(err => console.log(err));
    }
    
}

module.exports = new UserApi;

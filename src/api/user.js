const UserModel = require('../models/Users');
const EventModel = require('../models/Events');

class UserApi {

    // Get all users
    getAllUsers(req, res, next) {
        UserModel.getAll(function(data) {
            res.json(data);
        })
    }

    getSelfInfo(req, res, next) {
        UserModel.getById(req.session.userId, function(info) {
            EventModel.getFollowed(req.session.userId, function(events) {
                info.push(events.length);
                EventModel.getAllEventsOfUser(req.session.userId, function(data) {
                    info.push(data.length);
                    res.json(info);
                })
            })
        })
    }

}

module.exports = new UserApi;

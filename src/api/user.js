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

    // [POST] /account/update
    updateInfo(req, res) {
        UserModel.update(req.session.userId, req.body, function(success) {
            if (success) {
                res.json({message: 'success'});
            }
            else res.json({message: 'fail'});
        })
    }

    getUserInfo(req, res) {
        const userId = req.params.id;
        UserModel.getById(userId, function(info) {
            EventModel.getFollowed(userId, function(events) {
                info.push(events.length);
                EventModel.getAllEventsOfUser(userId, function(data) {
                    info.push(data.length);
                    res.json(info);
                })
            })
        })
    }

    follow(req, res) {
        const userId = req.params.id;
        UserModel.follow(req.session.userId, userId, function() {
            res.json(true);
        })
    }

    unFollow(req, res) {
        const userId = req.params.id;
        UserModel.unFollow(req.session.userId, userId, function() {
            res.json(true);
        })
    }

}

module.exports = new UserApi;

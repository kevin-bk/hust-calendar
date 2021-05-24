const EventModel = require('../models/Events');

class EventApi {
    create(req, res,next) {
        var event = req.body;
        event.owner = req.session.userId;
        EventModel.createEvent(event, function(success) {
            if (success) res.json({ message: 'success'});
            else res.json({ message: 'fail'});
        })
    }

    edit(req, res, next) {
        EventModel.updateEvent(req.params.id, req.body, function(success) {
            if (success) res.json(true);
            else res.json(false);
        })
    }

    delete(req, res, next) {
        EventModel.deleteEvent(req.params.id, function() {
            res.json({ message: 'success'})
        })
    }

    deleteAll(req, res, next) {
        EventModel.deleteAll(function() {
            res.send('done');
        })
    }

    getAll(req, res) {
        EventModel.getAll(req.session.userId, function(events) {
            if (events) {
                res.json(events);
            }
            else res.json(false);
        })
    }
    getAllName(req, res) {
        EventModel.getAllName(req, res, function(events) {
            
            // if(req.query.q != null) {
            //     var q = req.query.q;
            //     res.status = 200;
            //     let result_search = [];
            //     for(let i = 0; i < events.length; i++){
            //         if( events[i].name.toLowerCase().indexOf(q.toLowerCase()) != -1) {
            //             result_search.push(result[i])
            //         }
            //     }
            //     res.json(result_search);
            // }
            res.json(events);
        })
    }

    follow(req, res) {
        EventModel.addFollower(req.body.eventId, req.session.userId, function() {
            res.json(true);
        })
    }

    getFollowed(req, res) {
        EventModel.getFollowed(req.session.userId, function(events) {
            if (events) {
                res.json(events);
            }
            else res.json(false);
        })
    }

    unFollow(req, res) {
        EventModel.unFollow(req.body.eventId, req.session.userId, function() {
            res.json(true);
        })
    }

    getInDate(req, res) {
        var date = req.query.date;
        EventModel.getInDate(req.session.userId, date, function(events) {
            if (events) {
                res.json(events);
            }
            else res.json({});
        })
    }

    getSelf(req, res) {
        EventModel.getSelf(req.session.userId, function(events) {
            if (events) {
                res.json(events);
            }
            else res.json({});
        })
    }
}

module.exports = new EventApi;

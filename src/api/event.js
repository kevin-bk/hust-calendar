const EventModel = require('../models/Events');

class EventApi {
    create(req, res,next) {
        var event = req.body;
        event.owner = req.session.userId;
        console.log(event);
        EventModel.createEvent(event, function(success) {
            if (success) res.json({ message: 'success'});
            else res.json({ message: 'fail'});
        })
    }

    edit(req, res, next) {
        EventModel.updateEvent(req.eventID, req.body, function(success) {
            if (success) res.json({ message: 'success'});
            else res.json({ message: 'fail'});
        })
    }

    delete(req, res, next) {
        EventModel.deleteEvent(req.eventID, function() {
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

    test(req, res, next) {
        res.json(req.session.userId);
        // var date = new Date(2021, 4, 19);
        // console.log(date);
        // EventModel.getEventAtDate( 0, date, function(data) {
        //     res.json(data);
        // })
    }
}

module.exports = new EventApi;

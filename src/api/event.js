const EventModel = require('../models/Events');

class EventApi {
    create(req, res,next) {
        EventModel.createEvent(req.body, function(success) {
            if (success) res.json({ message: 'success'});
            else res.json({ message: 'fail'});
        })
    }
}

module.exports = new EventApi;

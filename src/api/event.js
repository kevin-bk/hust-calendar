const Events = require('../models/Events');

class EventApi {
    test(req, res,next) {
        var data = {
            name: "Test",
            description: "testing event",
            owner: '19',
            followers: ['1', '2']
        }
        Events.addFollower(1, 8, function() {
            res.send('done');
        })
    }
}

module.exports = new EventApi;

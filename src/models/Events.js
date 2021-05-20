const EventModel = require('./schemas/Events');

module.exports = {
    getEventById: function(id, callback) {
        EventModel.findById({ id })
            .then(data => callback(data));
    },

    getEventsOfUser: function(userID, callback) {
        EventModel.find({ owner: userID, public: true })
            .then(data => callback(data));
    },

    createEvent: function(event, callback) {
        const Event = new EventModel(event);
        Event.save()
            .then(() => callback());
    },

    updateEvent: function(eventID, data, callback) {
        EventModel.updateOne({ _id: eventID}, data)
            .then(() => callback());
    },

    addFollower: function(eventID, userID, callback) {
        EventModel.updateOne(
            { _id: eventID, followers: {$ne: userID} },
            { $push: {followers: userID} }
        )
            .then(() => callback());
    },

    unFollow: function(eventID, userID, callback) {
        EventModel.updateOne(
            { _id: eventID },
            { $pull: {followers: userID} }
        )
            .then(() => callback());
    },
    
    deleteEvent: function(evenID, callback) {
        EventModel.delete({ _id: evenID })
            .then(() => callback());
    }
}

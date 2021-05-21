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
            .then(() => callback(true))
            .catch(() => callback(false));
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
    },

    deleteAll: function(callback) {
        EventModel.deleteMany({})
            .then(() => callback());
    },

    getEventAtDate: function(userID, date, callback) {
        EventModel.find({ date: date})
            .then(data => callback(data))
            .catch(err => callback(err));
    },

    getEventBetweenDate: function(userID, date1, date2, callback) {
        EventModel.find({ owner: userID})
            .where('date').gt(date1).lt(date2)
            .then(data => callback(data));
    },

    getAll: function(userID, callback) {
        EventModel.find({ owner: {$ne: userID}, followers: {$ne: userID}})
            .then(events => callback(events))
            .catch(() => callback(false));
    },

    getFollowed: function(userID, callback) {
        EventModel.find({ owner: {$ne: userID}, followers: userID})
            .then(events => callback(events))
            .catch(() => callback(false));
    }
}

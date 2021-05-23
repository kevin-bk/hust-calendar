const EventModel = require('./schemas/Events');

function dateToString(d) {
    const date = new Date(d);
    return ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + 
    '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) +
    '-' + date.getFullYear();
}


module.exports = {
    getEventById: function(id, callback) {
        EventModel.findById({ id })
            .then(data => callback(data));
    },

    getAllEventsOfUser: function(userID, callback) {
        EventModel.find({ owner: userID })
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
    },

    getInDate: function(userID, date, callback) {
        EventModel.find({owner: userID})
            .then(events => {
                let Events = events.filter(event => {
                    if (date == dateToString(event.date)) return event;
                })
                return Events;
            })
            .then(events => callback(events))
            .catch(() => callback(false));
    },

    getSelf: function(userID, callback) {
        EventModel.find({owner: userID})
            .then(events => callback(events))
            .catch(() => callback(false));
    }
}

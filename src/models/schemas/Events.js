const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const autoIncrement = require('../../db/autoIncrementPlugin');
const Schema = mongoose.Schema;

const Event = new Schema({
    name: { type: String },
    description: { type: String },
    date: { type: Date},
    timeStart: { type: String },
    timeEnd: { type: String },
    owner: { type: String },
    type: { type: String },
    private: { type: Boolean },
    followers: [{ type: String }],
    image: { type: String },
    done: { type: Boolean}
});

// add plugin
Event.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
Event.plugin(autoIncrement, 'Event');

module.exports = mongoose.model('Event', Event);

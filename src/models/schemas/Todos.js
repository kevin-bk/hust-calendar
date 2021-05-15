const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const autoIncrement = require('../../db/autoIncrementPlugin');
const Schema = mongoose.Schema;

const Todo = new Schema({
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

// add plugin
User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
User.plugin(autoIncrement, 'User');

module.exports = mongoose.model('Todo', Todo);
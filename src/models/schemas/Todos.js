const mongoose = require('mongoose');
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

module.exports = mongoose.model('Todo', Todo);
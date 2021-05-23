const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const autoIncrement = require('../../db/autoIncrementPlugin');
const Schema = mongoose.Schema;

const Admin = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

// add plugin
Admin.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
Admin.plugin(autoIncrement, 'Admin');

module.exports = mongoose.model('Admin', Admin);

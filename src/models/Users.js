const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const autoIncrement = require('../db/autoIncrementPlugin');
const Schema = mongoose.Schema;

const User = new Schema({
  username : {type: String},
}, {
  timestamps: true,
});

// add plugin
User.plugin(mongooseDelete,{ 
  deletedAt : true,
  overrideMethods: 'all',
 });
User.plugin(autoIncrement, 'User');

module.exports = mongoose.model('User', User);

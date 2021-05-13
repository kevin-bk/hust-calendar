const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
var connection = mongoose.createConnection("mongodb://localhost:27017/calendar");
autoIncrement.initialize(connection);

module.exports = autoIncrement.plugin;

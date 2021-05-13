const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
var connection = mongoose.createConnection("mongodb+srv://g26:khongduoctietlo@cluster0.jmxom.mongodb.net/calendar?retryWrites=true&w=majority");
autoIncrement.initialize(connection);

module.exports = autoIncrement.plugin;

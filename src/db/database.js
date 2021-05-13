const mongoose = require('mongoose');

async function connect(){
     try {
        await mongoose.connect('mongodb+srv://g26:khongduoctietlo@cluster0.jmxom.mongodb.net/calendar?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('Connect Database Successfully!')
     } catch (error) {
        console.log('Connect Database Failed!')
     }
}

module.exports = { connect };

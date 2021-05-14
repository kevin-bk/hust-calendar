const homeRouter = require('./home');
const apiRouter = require('./api');
const loginRouter = require('./login');

function route(app){
    app.use('/api', apiRouter);
    app.use('/login', loginRouter);
    app.use('/', homeRouter);
}

module.exports = route;

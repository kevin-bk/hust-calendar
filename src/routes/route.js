const mainRouter = require('./main');
const homeRouter = require('./home');
const apiRouter = require('./api');
const loginRouter = require('./login');
const requireLogin = require('../middlewares/requireLogin');

function route(app){
    app.use('/api', apiRouter);
    app.use('/login', loginRouter);
    app.use('/app', mainRouter);
    app.use('/', homeRouter);
}

module.exports = route;

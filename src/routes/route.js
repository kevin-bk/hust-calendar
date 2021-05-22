const mainRouter = require('./main');
const homeRouter = require('./home');
const apiRouter = require('./api');
const loginRouter = require('./login');
const requireLogin = require('../middlewares/requireLogin');
const testRouter = require('./test')
function route(app){
    app.use('/api', apiRouter);
    app.use('/login', loginRouter);
    app.use('/app', requireLogin, mainRouter);
    app.use('/test',testRouter);
    app.use('/', homeRouter);
    app.use('*', function(req, res, next) {
        res.render('page/notFound', {
            layout: 'blank'
        });
    });
}

module.exports = route;

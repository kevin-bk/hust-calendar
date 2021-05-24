const mainRouter = require('./main');
const homeRouter = require('./home');
const apiRouter = require('./api');
const loginRouter = require('./login');
const adminRouter = require('./admin');
const requireLogin = require('../middlewares/requireLogin');

function route(app){
    app.use('/api', apiRouter);
    app.use('/login', loginRouter);
    app.use('/app', requireLogin, mainRouter);
    app.use('/admin', adminRouter);
    // app.use('/search', function(req, res) {
    //     // res.render('page/search');

    // });
    app.use('/', homeRouter);
    app.use('*', function(req, res, next) {
        res.render('page/notFound', {
            layout: 'blank'
        });
    });
}

module.exports = route;

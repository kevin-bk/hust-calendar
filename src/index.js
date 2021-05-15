const express = require('express')
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const route = require('./routes/route');
const bodyParser = require('body-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const app = express();

// database
const db = require('./db/database');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

// connect database
db.connect();

// template engine
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));

// set view engine and public folder
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'pub')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Store session to database
app.use(session({
  secret: 'mySecretKey',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: 'mongodb+srv://g26:khongduoctietlo@cluster0.jmxom.mongodb.net/calendar?retryWrites=true&w=majority',
    ttl: 36000
  })
}));

route(app);

// Start calendar app
const port = 3000;
app.listen(port, () => {
  console.log(`Calendar app started at http://localhost:${port}`)
})
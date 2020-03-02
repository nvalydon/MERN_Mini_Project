const express = require('express');
const passport = require('./auth');
const app = express();
const cors = require('cors');
const users = require('./routes/users');
const { session } = require('./config/config.json');

app.use(require('cookie-parser')());
app.use(express.static('public'));
app.use(require('express-session')({ secret: session.secret, resave: true, saveUninitialized: true }));
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use('/users', users);

app.listen(9090);

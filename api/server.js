const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('./auth');
const books = require('./routes/books');
const users = require('./routes/users');
const { session } = require('./config/config.json');
const users = require('./routes/users')

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: session.secret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.authenticate('local'));
app.use(express.json());

app.use('/users', users);

app.listen(9000);

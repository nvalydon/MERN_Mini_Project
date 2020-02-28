const express = require('express');
const passport = require('passport');
const app = express();
const cors = require('cors');
const users = require('./routes/users');
const { session } = require('./config/config.json');

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: session.secret, resave: true, saveUninitialized: true }));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.authenticate('local'));
app.use(express.json());
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
//   }));

app.use('/users', users);

app.listen(9090);

const Sequelize = require('sequelize');
const db = require('../config/database');
const passportLocalSequelize = require('passport-local-sequelize');

const user = passportLocalSequelize.defineUser(db, {
    email: Sequelize.STRING
});

module.exports = user;


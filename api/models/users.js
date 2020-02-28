const Sequelize = require('sequelize');
const db = require('../config/database');
const passportLocalSequelize = require('passport-local-sequelize');

const user = db.define('user',{
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

passportLocalSequelize.attachToUser(user, {
    usernameField: 'username',
    hasField: 'myhash',
    saltField: ''
})

module.exports = user;


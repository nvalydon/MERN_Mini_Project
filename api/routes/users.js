const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { jwt: { secret } } = require('../config/config.json');
const jwt = require('jsonwebtoken');
const passport = require('../auth');

router.get("/get", (req, res) => {
  User.findAll({
    attributes: ['username', 'email']
  })
    .then(result => {
      res.status(200).json({ users: result })
    })
    .catch(err => console.log(err));
});

router.get('/test', (req, res) => {
  res.send({ message: "hello" });
});

router.post("/register", ({ body: { username, password, email } }, res) => {
  debugger;
  User.register(new User({
    username: username,
    email: email
  }, password, (err, user) => {
    console.log("enters response");
    if (err) {
      console.log(err);
      return res.status(500).send(`Error: ${err}`);
    }
    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 60 * 60
    });
    res.status(201).send({
      message: `User: ${user.username} added and signed in`,
      token,
      auth: true,
      name: user.username
    });
  }));
});

router.post("/login", passport.authenticate('local', { failureRedirect: 'login' }),
  ({ user: { id, username } }, res) => {
    const token = jwt.sign({ id: id }, secret, {
      expiresIn: 60 * 60
    });
    res.status(200).json({
      message: `User ${username} found and signed in`,
      token,
      auth: true,
      name: username
    });
  });

module.exports = router;

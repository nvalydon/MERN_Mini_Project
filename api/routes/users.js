const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/users");

router.get("/get", (req, res) =>
  User.findAll()
    .then(users => console.log(users))
    .catch(err => console.log(err))
);

router.post("/createPlayer", (req, res) => {
  console.log("request");
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    
  });

  user.save();

  res.send("User Added");
});

module.exports = router;

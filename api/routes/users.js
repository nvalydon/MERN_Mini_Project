const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/users");

router.get("/get", (req, res) => {
  User.findAll((err, result) => res.send(result))}
    // .then(users => console.log(users))
    // .catch(err => console.log(err))
);
router.get('/test', (req, res) => {
  res.sendStatus(200).send({message: "hello"});
});

router.post("/createPlayer", (req, res) => {
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    
  });

  user.save();

  res.send("User Added");
});

module.exports = router;

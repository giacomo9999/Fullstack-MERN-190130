const User = require("../models/user.model");

exports.test = (req, res) => res.send("Greetings From user Controller.");
exports.user_create = (req, res, next) => {
  let user = new User({
    userName: req.body.userName
  });
  user.save(err => {
    if (err) {
      return next(err);
    }
    res.send("User created successfully.");
  });
};

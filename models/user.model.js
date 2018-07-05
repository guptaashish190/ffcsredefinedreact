const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema =  new Schema({
  username: String,
  password: String,
  userID: String,
  displayName: String,
  email: String,
  photoURL: String
});

userSchema.pre('save', function(next){
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

module.exports = mongoose.model("users",userSchema,"users");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema =  new Schema({
  userID: String,
  displayName: String,
  email: String,
  photoURL: String
});

module.exports = mongoose.model("users",userSchema,"users");

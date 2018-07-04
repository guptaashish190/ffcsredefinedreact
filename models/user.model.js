var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema =  new Schema({
  googleID: String,
  displayName: String,
});

module.exports = mongoose.model("users",userSchema,"users");

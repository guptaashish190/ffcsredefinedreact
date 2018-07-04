var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema =  new Schema({
  VENUE : String,
  CODE : String,
  TITLE : String,
  TYPE : String,
  CREDITS : String,
  SLOT : String,
  FACULTY : String
});

module.exports = mongoose.model("ffcsDBObject",dataSchema,"ffcsDBObjects");

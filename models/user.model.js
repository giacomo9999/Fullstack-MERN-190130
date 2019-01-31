const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  userName: { type: String, required: true, max: 20 }
});

module.exports = mongoose.model("User", UserSchema);

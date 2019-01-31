const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EncTableSchema = new Schema({
  encTableName: { type: String, required: true, max: 50 },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  encTableRegion: { type: String, required: true, max: 50 },
  encTableDifficulty: { type: String, required: true, max: 50 },
  encTableMonsters: []
});

module.exports = mongoose.model("EncTable", EncTableSchema);

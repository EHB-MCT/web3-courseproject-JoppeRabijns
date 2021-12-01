const MONGOOSE = require("mongoose");
const modelSchema = new MONGOOSE.Schema({
  title: { type: String, required: true },
  video: { type: Array, required: true },
});
const model = MONGOOSE.model("model", modelSchema);
module.exports = model;

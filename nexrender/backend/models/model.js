const MONGOOSE = require("mongoose");
const modelSchema = new MONGOOSE.Schema({
  projectName: { type: String, required: true },
  videoNames: { type: Array, required: true },
});
const model = MONGOOSE.model("model", modelSchema);
module.exports = model;

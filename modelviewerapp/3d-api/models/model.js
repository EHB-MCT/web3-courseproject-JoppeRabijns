const mongoose = require("mongoose"); 
const modelSchema = new mongoose.Schema({
    title: {type:String, required:true},
    model: {type:String, required:true},
    creator: {type:String, required:true},
    size: {type:String, required:true},
});

const Model = mongoose.model('model', modelSchema); 
module.exports = Model; 
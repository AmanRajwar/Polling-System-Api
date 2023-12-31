const { default: mongoose } = require("mongoose");

const OptionSchema= new mongoose.Schema({
 text:{
    type:String,
    required:true,
 },
 votes:{
    type:Number,
    default:0
 },
 link_to_vote:{
    type:String,
 }
});

const Option = mongoose.model('Option',OptionSchema);
module.exports = Option;
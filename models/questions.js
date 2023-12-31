const { default: mongoose } = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    option:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }]
})

const Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;
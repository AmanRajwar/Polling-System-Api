const Question = require('../models/questions');
const Option = require('../models/options');




module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        const exists = await Question.findOne({ title: req.body.title });
        if (exists) {
            return res.status(200).json({
                message: "already exists",
                question: exists
            });
        }
        const question = await Question.create({
            title: req.body.title
        })
        if (question) {
            return res.status(200).json(question);
        }
        return res.status(201).json({ message: 'Question is not created' });
    } catch (error) {
        console.log('error in creating question ====>', error)
        return res.status(500).json({ message: 'error in creating question' });
    }
}



module.exports.createOption = async (req, res) => {
    try {

        //check if same option already exists
        const exists = await Option.findOne({ text: req.body.text });
        if (exists) {
            return res.status(200).json({
                message: "already exists",
                option: exists
            });
        }

        //if not then find the question and create option 
        const question = await Question.findById(req.params.id);
        if (!question) {
            console.log('invalid Question Id');
            return res.status(201).json({ message: 'Invalid Question Id' });
        }
        const option = await Option.create({ text: req.body.text, });

        question.option = option;
        option.link_to_vote = `http://localhost:2000/options/${option._id}/add_vote`;
        await question.save();
        await option.save();
        return res.status(201).json(option);
    } catch (error) {
        console.log('error in creating option ====>', error)
        return res.status(500).json({ message: 'error in creating option' });
    }
}


module.exports.delete = async (req, res) => {
    const questionId = req.params.id;

    try {
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }


        //   for (const option of question.option) {
        //     await Option.findByIdAndDelete(option);
        //   }
        await Option.deleteMany({ _id: { $in: question.option } })
        await Question.findByIdAndDelete(question._id);

        res.status(200).json({ message: 'Question and associated options deleted successfully' });
    } catch (error) {
        console.log('error in deleting question ====>', error);
        res.status(500).json({ error: 'Failed to delete question and associated options' });
    }
}

module.exports.viewQuestion = async (req, res) => {
    const questionId = req.params.id;

    try {
        const question = await Question.findById(questionId).populate('option');
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.status(200).json(question);
    } catch (error) {
        console.log('error in getting question ===>', error);
        res.status(500).json({ error: 'Failed to fetch question and options' });
    }
}
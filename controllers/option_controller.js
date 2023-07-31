const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.delete = async (req, res) => {
    try {
        const option = await Option.findByIdAndDelete(req.params.id);
        if (!option) {
            console.log('can not find and delete Option ')
            return res.status(201).json({ message: 'can not find and delete Option' });
        }
        return res.status(200).json(option);
    }
    catch (error) {
        console.log('error in deleting option', error)
        return res.status(500).json({ error: 'error in  deleting Option' });
    }

}


module.exports.addVote = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            console.log('can not find Option ')
            return res.status(201).json({ message: 'can not find Option' });
        }

        option.votes += 1;
        await option.save();
        return res.status(200).json(option)
    } catch (error) {
        console.log('error in adding vote', error)
        return res.status(500).json({ error: 'error in adding vote' });
    }
}
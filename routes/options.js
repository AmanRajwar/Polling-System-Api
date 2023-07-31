const express = require('express');
const router = express.Router();

const optionController = require('../controllers/option_controller');

router.get('/:id/add_vote', optionController.addVote);
router.get('/:id/delete', optionController.delete);

module.exports = router;
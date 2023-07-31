const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question_controller');

router.post('/create', questionController.create);
router.post('/:id/options/create', questionController.createOption);
router.get('/:id/delete', questionController.delete);
router.get('/:id', questionController.viewQuestion);

module.exports = router;
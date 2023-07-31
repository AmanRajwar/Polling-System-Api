const express = require('express');
const router = express.Router()

router.get('/', (req,res)=>{
  return res.send("<h1>Its Working</h2>");
})
router.use('/questions', require('./questions'))
router.use('/options', require('./options'))

module.exports = router;

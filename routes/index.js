const express = require('express');
const router = express.Router()

router.get('/', (req,res)=>{
  return res.send("<h1>Its Working</h2>
                  <h3> To use post Req You can use Postman</h3>
                  <h5>END POINTS</h5>
                   <a href="https://polling-system-api-sjb4.onrender.com/questions/64c81798949b1f107e86e643">GET QUESTION WITH ITS OPTIONS</a>
    <a href="https://polling-system-api-sjb4.onrender.com/questions/64c81798949b1f107e86e643">GET QUESTION WITH ITS OPTIONS</a>
    <P>REST IS UP TO YOU (●'◡'●) </P>");
})
router.use('/questions', require('./questions'))
router.use('/options', require('./options'))

module.exports = router;

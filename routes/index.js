const express = require('express');
const router = express.Router()

const render = `<h1>Its Working</h1>
                  <h3> To use POST REQUEST You can use Postman</h3>
                   <a href="https://polling-system-api-sjb4.onrender.com/questions/64c81798949b1f107e86e643">GET QUESTION WITH ITS OPTIONS</a>
                   <P>REST IS UP TO YOU (●'◡'●) </P>`
router.get('/', (req,res)=>{
  return res.send(render);
})
router.use('/questions', require('./questions'))
router.use('/options', require('./options'))

module.exports = router;

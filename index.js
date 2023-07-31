const express = require('express');
const port = 2000;
const db = require('./configs/mongoose');
const app = express();



app.use(express.urlencoded());
app.use(express.json());





app.use('/',require('./routes'));

app.listen(port, (error) => {
    if (!error) {
        console.log('Server is up and running on port ', port);
    }
})
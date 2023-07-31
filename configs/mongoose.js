const { default: mongoose } = require("mongoose");

 mongoose.connect('mongodb://127.0.0.1/polling_system');

 const db = mongoose.connection;

 db.on('error', console.error.bind(console, 'error in connecting to the database'));

 db.once('open',function(){
    console.log("successfully connected to the database");
 })





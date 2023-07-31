const { default: mongoose } = require("mongoose");

 const dbURI = process.env.MONGODB_URI;

 mongoose.connect(dbURI);

 const db = mongoose.connection;

 db.on('error', console.error.bind(console, 'error in connecting to the database'));

 db.once('open',function(){
    console.log("successfully connected to the database");
 })





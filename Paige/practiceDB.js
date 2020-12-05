const mongoose = require('mongoose');
const mongoDB = 'Atlas DB Copy+Paste string here'; 

//variable stores and gives access to MODELS 
var producer = require('./pathing/goesHere.js');
var  = require('./pathing/Here.js'); 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function(){
    //check terminal after command node fileName.js 
    console.log("We're connected");


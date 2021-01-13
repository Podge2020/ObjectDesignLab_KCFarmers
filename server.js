const mongoose = require('mongoose');
var Resource = require('./models/resource.js'); 
var resourceItem = require('./models/resourceItem.js'); 
//Load in the express module
const express = require('express');  
const path = require('path');

//creates a new express application 
const app = express(); 
//declare the port we want to connect to 
const port = 3000; 

const mongoDB = ''; 
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 
const db = mongoose.connection;
//open a connection to the database 
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

//use just says, use the following middleware: 
app.use(
    //express.static: is middleware for delivering static files
    //like html, css, javascript, images, etc. 
    express.static(
        //basically this just takes care of relative paths 
        path.join(__dirname, 'public')
        )
    );

//middleware to handle request processing 
app.use(express.json());
app.use(express.urlencoded({ extended:false })); 

//opening up our server to listen on a specific ip address and port 
//ip addresses are also known as hostnames 
var server = app.listen(port, function(){
    console.log("The server is running at port " + port); 
});

/* our api calls/AKA our REST API */ 

//127.0.0.1:3000/items 
app.get('/resources', function(request, response){
    /*get data*/ 
    resource.find(function(err, resources){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(resources); 
    })    
}); 


app.post('/resources', function(request, response){
    let newData = new Item(request.body); 
    newData.save(function(error,resource){
        if(error) { console.log(error); 
            response.sendStatus(500);     
        }
        console.log("Success, item added!"); 
        response.sendStatus(200); 
    }); 

}); 

app.delete('/resources', function(request, response){

    /*delete data*/ 
    Item.deleteOne(request.body, function (err) {
        if (err){ console.log(err); return; }
        response.sendStatus(204); 
      });  
}); 

/*for testing purposes */ 
module.exports = server; 
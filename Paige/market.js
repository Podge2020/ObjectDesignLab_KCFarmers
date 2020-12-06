//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//creates NEW schemas 

//create schema for 
const marketSchema = new Schema({
    marketName : String, 
    //WHAT 
    products : { /* Reference ObjectIds */ }, 
    productTypes : { }, 
    
    //WHERE 
    location : String, 
    
    //WHEN
    datesOpen : [], /* Unsure best way here, thought could use ref id to connect to Calendar too */
    timesOpen : [], 
    
    //CONTACT 
    contactLink : String, /* URL to farmer's market site */


}); 
  
module.exports = mongoose.model("market", marketSchema);

//Method to search by product will show results on map like it was a "farmer" 
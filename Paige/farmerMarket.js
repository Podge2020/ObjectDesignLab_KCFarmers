//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//creates NEW schemas 

//create schema for 
const farmerMarketSchema = new Schema({
    farmBizName : String, 
    location : String, 
    products : { /* Reference ObjectIds */ }, 
    datesOpen : [], /* Unsure best way here, thought could use ref id to connect to Calendar too */
    contactLink : String, /* URL to farmer's market site */

}); 
  
module.exports = mongoose.model("Input", inputSchema);

//Method to search by product will show results on map like it was a "farmer" 
// //creates interface to mongoose module built in from node js 
// const mongoose = require('mongoose');

// //creating a variable that can be reused to make mongoose schema possible 
// const Schema = mongoose.Schema;  

// //create schema for MARKETS (WHERE) on map 
// const marketSchema = new Schema({
//     marketName : String, 
//     //WHAT 
//     products : { /* Reference ObjectIds */ }, 
//     productTypes : { }, 
//     farmers : { /* biz names listed */}, 
    
//     //WHERE 
//    location : String, /* might be [] of multiple locations */
    
//     //WHEN
//     datesOpen : [], /* Unsure best way here, thought could use ref id to connect to Calendar too */
//     timesOpen : [], 
    
//     //CONTACT 
//     contactLink : String, /* URL to farmer's market site */


// }); 
  
// module.exports = mongoose.model("market", marketSchema);

// //Method to search by all markets to see every where can go buy fresh/local   
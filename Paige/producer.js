//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//create schema for PRODUCERS on map  
const producerSchema = new Schema({

    //properties to FILTER SEARCH W/
    producerBizName : String, 
    products : { }, /* product.js reference here: ObjectIds to connect all SAME products among ALL producers */
    location : String, /* Address include ZIPCODE for comparison use */
    purchaseOpts : [ ], /* Options: Direct from farm ways, Online, CSA orders, Farmer's Market, Stores listed */

    //properties to CONNECT TO FARMER W/
    contactLink : String, /* URL to farmer's site */
    contactPhone : String, /* cannot use Numbers with MongoDB for phone number (will add .000000 to end of it), StackOverflow to remember here: https://stackoverflow.com/questions/32272410/how-to-store-data-as-type-number-in-mongodb-using-sails-js */
    contactSocial : String, /* URL to farmer's Social Media site, possibly array of multiples */
    
    //properties below listed as additional ideas that need more development: 
    closeBy : Boolean, /* Save as true/false using variable to compare user distance to Biz distance to track if users desired area (thinking using zip code would be easier than miles, have to consider how the crow flies otherwise...woof)*/
    marketFarmer : Boolean, /* DO they sell at a farmers market? IF true then array of local farmers markets they attend by referencing Local Farmer Markets Schema  */ 
    organic : Boolean, /* True/False if certified organic */
    CSA : Boolean, /* True/False if offer CSA boxes */
    
    //propertiees below not sure if possible or necessary to include: 
    price : { type: Double, }, /* ??? Unsure about this one yet, feels repetitive with products and some won't have available - Object of Products with Prices also Data type to save decimal floating point numbers https://data-flair.training/blogs/mongodb-data-types/ */
}); 
  
// Method search() return new object of matching producers that shows on map 
// Lowkey figured out a BASIC way to make a functioning map appear-ish 
// HOW to make the map function idea: if every producer was an object that had a symbol on the map SHOWING true at first so see ALL then you could run search() function so that javescript makes producers that DO NOT match NOT display on the map for results 


module.exports = mongoose.model("producer", producerSchema);
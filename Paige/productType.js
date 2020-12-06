//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//creates NEW schemas 

//create schema for product TYPES (might not need to be schema, could include in properties of PRODUCT schema?)
const productTypeSchema = new Schema({
    productType : {type: String, enum: ['Vegetable', 'Fruit', 'Dairy', 'Meat', 'Herb', 'Honey', 'Farm2Table', 'etc']}, 
    productSeason : {type: String, enum: ['Spring', 'Summer', 'Fall', 'Winter', 'NA']}
    //will gain ObjectID from DB each time new product added 
}); 

// Method to search for all inputs offering specifc product TYPE (found with ObjectID and/or Type), returns Object of all matching producers to show on map with JavaScript 


module.exports = mongoose.model("productType", productTypeSchema); 
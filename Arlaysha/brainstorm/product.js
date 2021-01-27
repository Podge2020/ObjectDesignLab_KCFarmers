//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//create schema for ALL products (WHAT)
const productSchema = new Schema({
    productName : String, 
    productType : {type: String, enum: ['Vegetable', 'Fruit', 'Dairy', 'Meat', 'Herb', 'Honey', 'Farm2Table', 'etc']}, 
    productSeason : {type: String, enum: ['Spring', 'Summer', 'Fall', 'Winter']}
    //will gain ObjectID from DB each time new product added 
}); 

// Method to search for all inputs offering specifc product (found with ObjectID and/or Type), returns Object of all matching producers to show on map with JavaScript 


module.exports = mongoose.model("product", productSchema); 
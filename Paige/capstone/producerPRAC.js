//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//create schema for PRODUCERS (WHO) on map  
const producerSchema = new Schema({
    //properties to FILTER SEARCH W/
    name : String, 
    productType : [],
    
    products : [], 

    productLocation : String, 
    zipCode : , 

    phoneNumber : String, 
    email : String, 

    facebook : String, 
    link : String, 

    notes : String, 
    openingYear : String, 

    directOrderOnline : Boolean, 
    csaOrSubs : Boolean, 
    farmerMarket : Boolean, 
    farmerMarketNames : [], 
    upick : Boolean, 
    wholesale : Boolean, 
    linkToWholesale : String, 
    kcDelivery : Boolean, 
    sellOnFarm : Boolean, 

    //API CALLS 

    //Display on map by TYPE: 

    //Meat 
    //Produce 
    //Dairy 
    //Eggs 
    //Herbs 
    //Mushrooms
    //Honey 
    //Speciality 

    //Display on map by SERVICE: 
    
    //directOrderOnline true 
    //csaOrSubs true 
    //upick true 
    //kcDelivery true 


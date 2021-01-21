//create an interface to the mongoose module
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//put the mongoose.Schema class into a variable for easier reading
const marketItemSchema = new Schema({
    
        marketName : String,
        marketTag : {type: String, enum:['Meat', 'Produce', 'Organic', 'Market']},
        location : String,
        seasonal : Boolean,
        marketID : Number,
        email : String,
        website : String,

},
{
    timestamps : true //use options to update time stamps
}
);

module.exports = mongoose.model ("marketItem", marketItemSchema);
/*test*/
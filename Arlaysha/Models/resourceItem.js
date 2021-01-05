//create an interface to the mongoose module
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//put the mongoose.Schema class into a variable for easier reading
const resourceSchema = new Schema({
    
        resourceName : String,
        resourceTag : {type: String, enum:['Event', 'Education', 'Farm', 'Market']},
        contributer : String,
        completed : Boolean,
        resourceID : Number,
},
{
    timestamps : true //use ootions to update time stamps
}
);

module.exports = mongoose.model ("Item", itemSchema);
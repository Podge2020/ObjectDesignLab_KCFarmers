//create an interface to the mongoose module
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//put the mongoose.Schema class into a variable for easier reading
const listSchema = new Schema({
    Title : { type:String },
    resource : [
        {
        resource : { type: Schema.Types.ObjectId, ref : "Resource" }
        }
        ],
    });

module.exports = mongoose.model("List", listSchema);
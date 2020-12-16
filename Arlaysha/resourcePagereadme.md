The resource page will be a list of resources with a function similar to the todo list to allow the community to add resources

-must inlcude email address for validation purpose
contributer=assignee
item=resource//message/body
title-name of the resource
priority=tags(organic, event, education, garden, farm, market, etc )
email address=make hidden?

Title: Community Contributed Resources?

/Model files/
Resource.js-----below
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




resourceItem.js-----below

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
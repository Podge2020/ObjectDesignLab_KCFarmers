var Comment = new Schema({​​​​​​​ ... }​​​​​​​);

//Forum Schema - includes title of question, answer content, comments, and users 
var Forum = new Schema({​​​​​​​
    title: {​​​​​​​type: String}​​​​​​​,
    content: {​​​​​​​type: String}​​​​​​​,
    comments: [Comment],
    attendees: [User]
}​​​​​​​);

//Users Schema - includes name, email, and forum properties 
var User = new Schema({​​​​​​​
    name: {​​​​​​​type: String}​​​​​​​,
    email: {​​​​​​​type: String}​​​​​​​,
    forums: [Forum], 
    saves: {type: Array}
}​​​​​​​);

//creates MODEL to hold users in Account object 
var Account = mongoose.model('Account', User);

//Calendar Schema - inclues event title, location, time of event, description, dates, and who
var Calendar = new Schema({
        title: {​​​​​​​type: String}​​​​​​​,
        location: {​​​​​​​type: String}​​​​​​​,
        time: {​​​​​​​type: Number}​​​​​​​,
        description: {​​​​​​​type: String}​​​​​​​,
        dates: {​​​​​​​type: Date}​​​​​​​,
        who: {​​​​​​​type: String}​​​​​​,


//Producer Schema - includes name, 
/* PW Using JSON in MongoDB is beneficial because of its flexibility further down the line 
as we continue devloping this idea. With the use of objects you can make changes to smaller pieces
easier than if you were using XML in a relational database; with the ease in changes of JSON this allows 
us to loosely build out our idea before knowing exactly how we want farmers/producers to be highlights through the application */
var Producer = new Schema({
    name: {​​​​​​​type: String}​​​​​​​,
    location: {​​​​​​​type: String}​​​​​​​,
    produce: {​​​​​​​type: Array}​​​​​​​,
})        

/* Also in the code comments, 
for at least one Schema per person, 
discuss what the pros and cons 
of developing the documents in XML in a 
relational database vs JSON/BSON in MongoDB would be/are. */


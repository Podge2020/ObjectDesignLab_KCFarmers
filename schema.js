var Comment = new Schema({​​​​​​​ ... }​​​​​​​);

var Forum = new Schema({​​​​​​​
    title: {​​​​​​​type: String}​​​​​​​,
    content: {​​​​​​​type: String}​​​​​​​,
    comments: [Comment],
    attendees: [User]
}​​​​​​​);

var User = new Schema({​​​​​​​
    name: {​​​​​​​type: String}​​​​​​​,
    email: {​​​​​​​type: String}​​​​​​​,
    forums: [Forum]
}​​​​​​​);

var Account = mongoose.model('Account', User);

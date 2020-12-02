var Comment = new Schema({​​​​​​​ ... }​​​​​​​);

//Forum Schema - includes title of question, answer content, comments, and users 
var Forum = new Schema({​​​​​​​
    title: {​​​​​​​type: String}​​​​​​​,
    content: {​​​​​​​type: String}​​​​​​​,
    comments: [Comment],
    attendees: [User],
   /*for later-AO #parent model
class forum(models.Model):
name=models.CharField(max_length=200,default="anonymous" )
email=models.CharField(max_length=200,null=True)
topic= models.CharField(max_length=300)
description = models.CharField(max_length=1000,blank=True)
link = models.CharField(max_length=100 ,null =True)
date_created=models.DateTimeField(auto_now_add=True,null=True)

def __str__(self):
    return str(self.topic)

#child model
class Discussion(models.Model):
forum = models.ForeignKey(forum,blank=True,on_delete=models.CASCADE)
discuss = models.CharField(max_length=1000)

def __str__(self):
    return str(self.forum)*/

    
}​​​​​​​);

//Resources-links, websites, businesses, etc
var Resources = new Schema({
    Title: {type:String},
    Description: {type: String},
    Phone:{type:Number},
    location:{type: Mixed}//consider evising for each address line field-ao
    Tag:{type:String} //to allow search of resources-AO
});

//Users Schema - includes name, email, and forum properties 
var User = new Schema({​​​​​​​
    name: {​​​​​​​type: String}​​​​​​​,
    email: {​​​​​​​type: String}​​​​​​​,
    forums: [Forum], 
    saves: {type: Array}
}​​​​​​​);

//creates MODEL to hold users in Account object 
var Account = mongoose.model('Account', User);

//Calendar Schema - includes event title, location, time of event, description, dates, and who
var Calendar = new Schema({
        title: {​​​​​​​type: String}​​​​​​​,
        location: {​​​​​​​type: String}​​​​​​​,
        time: {​​​​​​​type: Number}​​​​​​​,
        description: {​​​​​​​type: String}​​​​​​​,
        dates: {​​​​​​​type: Date}​​​​​​​,
        who: {​​​​​​​type: String}​​​​​​,


//Producer Schema - includes name, 
var Producer = new Schema({
    name: {​​​​​​​type: String}​​​​​​​,
    location: {​​​​​​​type: String}​​​​​​​,
    produce: {​​​​​​​type: Array}​​​​​​​,
})        

/* Also in the code comments, 
for at least one Schema per person, 
discuss what the pros and cons 
of developing the documents in XML in a r
elational database vs JSON/BSON in MongoDB would be/are. */


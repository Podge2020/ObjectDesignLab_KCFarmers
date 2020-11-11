# ObjectDesignLab_KCFarmers

What are the major entities for your objects? Who needs to access them?

- Major entities: Users, Producers, Location of User, Location of Producer, Products, Event Offerings (location, date, time, contact information) 
- Who needs access: Users & Producers, Admin  
- What needs access: Map, Community Forum Page, Calendar Page 


What assumptions are you making about your entities? Clarify them. 

- Assuming that users and producers are local to KC and specifically KC Metro area of (TBD)
- Assuming adult or adult supervised 
- Assuming interested in means to fresh, local food sources 
- Assuming they have decent internet to access site on device 


What functionality should each entity have?

- Community Forum Page: Functionality pertains to the ability to post questions and responses, review/rate responses, and save posts for later
- Calendar: Functionality includes displaying monthly calendar with event location + date + time, links to event site 
- Map: Functionality 


How do the entities need to be connected? 

- User's username, password, email and zipcode need to stay connected with the User while navigating the site (when using map zipcode will reflect distance from prodcuer) 
- Producer's bizName, location, origin, and products need to stay connected as a profile to be accessed by Users 
- For the Map feature, the User location and Producer location need to be connected to calculate distance; product and origin types need to be connected to search methods 
- For the Calendar featuer, Event titles, dates, locations, and times need to be connected to display cohesive information for User 


Can you identify where you use Abstraction, Polymorphism, Inheritance, and Encapsulation in your designs?

- Abstraction: the search filters provided for resulting map abstract the interface for the User 
- Polymorphism: 
- Inheritance: New events inherit Event class template for information; New producers inherit Producer class template; New users inherit Users class template; Community Forum posts inherit Post class template
- Encapsulation: Users, Producers, Map, Calendar, Event 


How will you apply KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) to your design?

- KISS will be applied when executing navigation functions on the site to attach buttons to actions; using Arrays and Classes to contain lists of Users, Producers, Products, Contact Information; straightforward filter options to prevent invalid inputs  
- DRY is applied using the Classes and Objects housing our functions 


Object Ideas: 
- Users 
Properties: 
username : string 
password : string
email    : string 
zipcode  : number 

Methods: 
- Login()
- Logout() 

Notes: 
//keep in mind potential scope expansion to involve e-commerce with Users being Producers as well 

class Users() {
          constructor (username, password, email, zipcode) {
              this.username = username;
              this.password = password; 
              this.email = email; 
              this.zipcode = zipcode; 
              }
          
         logIn() {
              //log-in will include username and password 
              
         }
         
         logOut() {
              //log-out
         }
         

- Producer/Growers/Farmers for Map 
Properties:
Business name : string 
Location      : string
Contact information : object/array [email, phone number, address] 
products sold : object/array [list of products]

Methods: 
- login()
- logout()
- profileUpload() (optional if producers can input to site TBD) 

Notes: 
//reviews from local users ability to attach to producer profile 

class Producers() {
          constructor (bizName, location, contact, products) {
              this.bizName = bizName;
              this.location = location; 
              this.contact = contact; 
              this.products = products; 
              }
          
         logIn() {
              //log-in will include username and password 
              
         }
         
         logOut() {
              //log-out
         }


- Map
//search result of choices from filters 
Properties(filters): 
location of producer  : number
location of user      : number 
type of product       : string 
origin of product     : string (farm, urban farm, local grower, farm to table restuarant) 
price                 : number 

Methods: 
- searchFor()
- milesAway()
- saveForLater()

class Map() {
          constructor (bizLocation, userLocation, products, type of farm, ) {
              this.bizName = bizName;
              this.location = location; 
              this.contact = contact; 
              this.products = products; 
              }
              
           searchFor() {
           }
           milesAway() {
           }
           saveForLater() {
           }

- Calendar 
Properties: 
event titles     : string
event dates      : string 
event locations  : number (zipcode)  
event sponsors   : string 

class Event() {
          constructor (title, dates, locations, sponsors) {
              this.title = title;
              this.date = date;
              this.location = location;  
              this.sponsor = sponsor; 
              }





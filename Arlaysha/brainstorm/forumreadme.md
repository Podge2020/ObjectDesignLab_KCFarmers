Our models class forum will store:

Customer name
Customer email
The topic of the forum
Reference links
Description
Creation date
Discussion class is a child class of forum that stores views from different users. It has just two fields-

The forum which is a foreign key (Provide a many-to-one relation by adding a column to the local model to hold the remote value). It helps in maintaining a record of which opinion belongs to which forum.
Discuss – It actually stores the opinion






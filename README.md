# Polling-System-Api

USE POSTMAN TO USE THIS API

Build Command- npm install

# Features


Create a question (you can add as many questions as you want)

 Add options to a question
 
 Add a vote to an option of question
 
 Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
 
 Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
 
 View a question with it’s options and all the votes given to it


 # Routes

  
 /questions/create (Post- To create a question)
 
 /questions/:id/options/create (Post -To add options to a specific question)
 
 /questions/:id/delete (Get - To delete a question)
 
 /options/:id/delete (Get - To delete an option)
 
 /options/:id/add_vote (Get - To increment the count of votes)
 
 /questions/:id (Get - To view a question and it’s options);
 

* To create a question using post man you need to send a json res

  KEY ---> title
  
  VALUE ----> "Any String"

* To create a option using post man you need to send a json res
  
 KEY ---> text
 
 VALUE ----> "Any String"

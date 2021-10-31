//require the library
const mongoose = require("mongoose");

//connection to database
mongoose.connect("mongodb://localhost:27017/Todo_list_db");

//accquire the connection(to check if it is successful)
const db = mongoose.connection;

//Error handling if any
db.on("error" , console.error.bind("error connecting to db"));

//Sucessfull then 
db.once("open" , function(){
    console.log("successfully connected to DB");
});
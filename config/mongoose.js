const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Todo_list_db");

const db = mongoose.connection;

db.on("error" , console.error.bind("error connecting to db"));

db.once("open" , function(){
    console.log("successfully connected to DB");
});

const todoListData = require("../models/TodoListData");
module.exports.home = function(req , res){
   todoListData.find({} , function(err , todoData){
      if(err){
        console.log(`Error in fecting the todo list data from mongoDB: ${err}`);
      }

      return res.render("home" , {
        title : "ToDo List",
        data : todoData
      });


   });
}
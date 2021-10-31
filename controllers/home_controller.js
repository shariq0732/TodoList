

// accquire model todoListData

const todoListData = require("../models/TodoListData");

// function for showing the home screen
module.exports.home = function(req , res){
   todoListData.find({} , function(err , todoData){
      if(err){
        console.log(`Error in fecting the todo list data from mongoDB: ${err}`);
      }
      console.log(todoData);
      return res.render("home" , {
        title : "ToDo List",
        data : todoData
      });
    });
}

// function for posting the data to the database
module.exports.posttodoListData = function(req , res){
    console.log(req.body);
    todoListData.create(req.body , function(err , newtodoDta){
        if(err){
            console.log(`error in posting the data: ${err}`);
        }

        console.log("new data *************** as:" , newtodoDta);
        return res.redirect('back');
    });
}

// function for deleting the data from the database
module.exports.deleteTodoListData = function(req, res){
  todoListData.deleteMany({ _id: { $in: req.query.id  } } , function(err , deleted){
    if(err){
      console.log(`Error in deleting the data: ${err}`);
    }
    console.log(deleted);
    return res.redirect('back');
  });
}
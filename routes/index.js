const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');


// route for getting the page
router.get('/' , homeController.home);

// route for posting the data
router.post('/post_todo_list', homeController.posttodoListData);

// route for deleting the data
router.get('/delete-todolist' , homeController.deleteTodoListData);


module.exports = router;

//require the library
const mongoose = require("mongoose");

//created the Schema
const todoListDataSchema = new mongoose.Schema({
    
    description : {
        type: String,
        required: true
    },

    catagory: {
        type: String,
        required: true
    },
    date: {
        type : Date,
        required: true
    }
});

//created model
const todoListData = mongoose.model("todoListData" , todoListDataSchema);
module.exports = todoListData;
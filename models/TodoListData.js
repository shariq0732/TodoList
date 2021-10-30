const mongoose = require("mongoose");

const todoListDataSchema = new mongoose.Schema({
    
    desc : {
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

const todoListData = mongoose.model("todoListData" , todoListDataSchema);
module.exports = todoListData;
//require the express server...
const expres = require("express");
const port = 8000;

// run the express server
const app = expres();

// require the mongoose configuration to setup the connection to database
const db = require("./config/mongoose");



// setted properties like views and view engine,
app.set("views" , "./views");
app.set("view engine" , "ejs");

// used the middle for static files and for decoding the data coming from forms
app.use(expres.static('assets'));
app.use(expres.urlencoded());

//require routes for "localhost:8000/" any routes will get migrated to routes module.
app.use('/' , require('./routes'));


// listening the server to check wheather server is runing sucessfully or not.
app.listen(port , function(err){
    if(err){
        console.log(`Server is having an error: ${port}`);
    }
    console.log(`Server is up and runing on port: ${port}`);
});

const expres = require("express");
const port = 8000;
const app = expres();
app.set("views" , "./views");
app.set("view engine" , "ejs");
app.use(expres.static('assets'));

app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Server is having an error: ${port}`);
    }
    console.log(`Server is up and runing on port: ${port}`);
});

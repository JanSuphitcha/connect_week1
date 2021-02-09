var express = require('express');
var app = express();

//look in public first
app.use(express.static("public"));

//what to do
app.get("/",function(req,res){
    res.send("Hello!");
});

app.listen(80);
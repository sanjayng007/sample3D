var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.set("view engine" , "ejs");
app.use("/assets", express.static("assets"));

app.get("/",function(req,res){
	res.render("index");
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on');
});

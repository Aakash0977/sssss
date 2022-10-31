const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function (req, res) {
  res.render("home");
})


app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/profile", function(req, res){
  res.render("profile");
});

app.listen(3000);




var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');

var app = express();
var PORT = process.env.PORT || 3000;

// var mongojs = require("mongojs");
// var databaseURL = "aeDB";
// var databaseURL = "mongodb://heroku_3nrjf3q6:u0hj1ol82gp6i4dp1vkdc918eq@ds153412.mlab.com:53412/heroku_3nrjf3q6";
// var collections = ["aeDB"];
// var db = mongojs(databaseURL, collections);
mongoose.Promise = Promise;
mongoose.connect("mongodb://heroku_3nrjf3q6:u0hj1ol82gp6i4dp1vkdc918eq@ds153412.mlab.com:53412/heroku_3nrjf3q6");


// require product models here:
// var prodects = require("./models/products.js");

// Morgan & Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

//Handlebars Framework Set Up
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// db.on("error", function(err) {
// 	console.log("Mongoose err: " + err);
// });

// db.once("open", function(){
// 	console.log("Mongoose connection successful!");
// });

// Routes
var routes = require("./controllers/route.js");
app.use("/", routes);


//List on PORT
app.listen(PORT, function() {
	console.log("App is running on port : " + PORT);
});

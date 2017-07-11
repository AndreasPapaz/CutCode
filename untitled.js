var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');

var app = express();
var PORT = process.env.PORT || 3000;

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

// set up a database connection with mock products
mongoose.connect("mongodb://localhost/aeDB", { useMongoClient: true });
var db = mongoose.connection;

// db.on("error", function(err) {
// 	console.log("Mongoose err: " + err);
// });

// db.once("open", function(){
// 	console.log("Mongoose connection successful!");
// });

// Routes
// var routes = require("./controllers/route.js");
// app.use("/", routes);

//List on PORT
app.listen(PORT, function() {
	console.log("App is running on port : " + PORT);
});
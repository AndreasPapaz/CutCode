var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var databaseURL = "aeDB";
var collections = ["aeDB"];
var db = mongojs(databaseURL, collections);

// model from mongoose
var products = require("./../models/products.js");


//MAIN PAGE
// =============================================
// router.get("/", function(req, res) {
// 	db.aeDB.find().limit(3, function(err, product) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			// res.json(product);
// 			var total = 0;
// 			var count = 0;

// 			for (var i = 0; i < product.length; i++) {
// 				if (product[i].saved === true){
// 					total += product[i].price;
// 					count++;
// 				}
// 			}

// 			// console.log(total);
// 			res.render("index.handlebars", {
// 				products: product,
// 				total: total.toFixed(2),
// 				count: count
// 			});
// 		}
// 	});
// });


//MAIN PAGE
// =============================================
router.get("/", function(req, res) {
	db.aeDB.find(function(err, product) {
		if (err) {
			console.log(err);
		} else {
			// res.json(product);
			var total = 0;
			var count = 0;

			for (var i = 0; i < product.length; i++) {
				if (product[i].saved === true){
					total += product[i].price;
					count++;
				}
			}

			// console.log(total);
			res.render("index.handlebars", {
				products: product,
				total: total.toFixed(2),
				count: count
			});
		}
	});
});





// SHOP PAGE
// =============================================
router.get("/shop", function(req, res) {
	db.aeDB.find(function(err, product) {
		if (err) {
			console.log(err);
		} else {
			var total = 0;
			var count = 0;

			for (var i = 0; i < product.length; i++) {
				if (product[i].saved === true){
					total += product[i].price;
					count++;
				}
			}

			// console.log(total);
			res.render("shop.handlebars", {
				products: product,
				total: total.toFixed(2),
				count: count
			});
		}
	});
});


//PRODUCT ADD
// =============================================
router.put("/add/product", function(req, res) {
	

	db.aeDB.update({
		"_id": mongojs.ObjectId(req.body.id)
	}, {
			$set: {saved: true}
		}, function(err, edit) {
			if (err) {
				console.log(err);
				res.send(err);
			}
			else {
				console.log(edit);
				res.send(edit);
			}
	});
});

//PRODUCT Delete
// =============================================
router.put("/delete/product", function(req, res) {
	

	db.aeDB.update({
		"_id": mongojs.ObjectId(req.body.id)
	}, {
			$set: {saved: false}
		}, function(err, edit) {
			if (err) {
				console.log(err);
				res.send(err);
			}
			else {
				console.log(edit);
				res.send(edit);
			}
	});
});








module.exports = router;

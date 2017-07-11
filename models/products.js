var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
	Title: {
		type: String,
		require: true
	},
	img: String,
	price: Number,
	saved: Boolean,
	feat: Boolean
});

var products = mongoose.model("products", productSchema);
module.exports = products;
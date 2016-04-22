var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var ProductSchema = mongoose.Schema({
	product_name: String,
	quantity_remaining: Number,
	image_url: String,
	description: String
});

mongoose.model('Product', ProductSchema);
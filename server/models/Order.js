var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var OrderSchema = mongoose.Schema({
	customer_name: String,
	product_name: String,
	quantity: Number,
	order_date: {type: Date, default: new Date}
});

mongoose.model('Order', OrderSchema);
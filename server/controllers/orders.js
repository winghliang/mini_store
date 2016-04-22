var mongoose = require('mongoose');

var Order = mongoose.model('Order');

var Product = mongoose.model('Product');

module.exports = {

	index: function(req, res){
		Order.find({}, function(err, output){
			if (err) {
				console.log('error finding orders')
			} else {
				res.json(output);
			}
		})
	},

	create: function(req, res){
		var order = new Order({customer_name: req.body.customer_name, quantity: req.body.quantity, product_name: req.body.product});

		Product.find({ product_name: req.body.product }, function(err, output){
			var product_to_update = output;
			var updated_quantity = product_to_update[0].quantity_remaining - req.body.quantity;
			Product.update( { product_name: req.body.product }, { quantity_remaining: updated_quantity}, function(err){
				if (err){
					console.log ('error updating quantity');
				} else {
					console.log('quantity updated.')
				}
			})
		});

		order.save(function(err){
			if (err){
				console.log('error saving order to database')
			} else {
				Order.find({}, function(err, results){
					if (err) {
						console.log('error finding orders after saving')
					} else {
						console.log('added order.  database of order now contains:', results)
						res.json(results)
					}
				})
			}
		})
	}

}
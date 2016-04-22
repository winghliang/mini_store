var mongoose = require('mongoose')
var Customer = mongoose.model('Customer')

module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, results){
			if (err){
				console.log('error finding all customers');
			} else {
				res.json(results);
			}
		})
	},

	create: function(req, res){
		var customer = new Customer( {name: req.body.name} );
		customer.save(function(err){
			if (err){
				console.log('error saving customer')
			} else {
				Customer.find({}, function(err, results){
					if (err){
						console.log('error getting names from database after adding to database');
					} else {
						res.json(results);
					}
				})
			}

		})
	},

	destroy: function(req, res){
		Customer.remove({ _id: req.body._id}, function(err){
			if (err) {
				console.log('Error removing record')
			} else {
				console.log('Customer successfully destroyed');
				Customer.find({}, function(err, results){
					res.json(results);
				})
			}
		})
	}

}
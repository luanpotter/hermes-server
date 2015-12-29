var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema ({
	name: String,
	status: String,
	server: String,
	run_id: Number
});

module.exports = mongoose.model('Service', ServiceSchema);
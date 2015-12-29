var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServerSchema = new Schema ({
	label: String,
	ip: String,
	status: String,
	version: String,
	run_id: Number
});

module.exports = mongoose.model('Server', ServerSchema);
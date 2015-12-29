var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobRequestSchema = new Schema ({
	url: String,
	type: String,
	active: { type: Boolean, default: true }
});

module.exports = mongoose.model('JobRequest', JobRequestSchema);
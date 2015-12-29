var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimerSchema = new Schema ({
	name: String,
	status: String,
	repeatStatus: Number,
	url: String,
	run_id: Number
});

module.exports = mongoose.model('Timer', TimerSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema ({
	title: String,
	read: { type: Boolean, default: false }
});

module.exports = mongoose.model('Notification', NotificationSchema);
var express	= require('express');
var app = express();
var bodyParser = require('body-parser');
var services = require('./app/services');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/osi-7');

//fixtures:start
var NotificationFixtures = require('../fixtures/notification');
//fixtures:finish

var Notification = require('../models/notification');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next) {
	next();
});

router.route('/notifications')
	.get(function(req, res) {
		services.findAll(Notification, res, req.query);
	});

router.route('/notifications/:notification_id')
	.get(function(req, res) {
		services.findById(Notification, req.params.notification_id, res);
	})
	.put(function(req, res) {
		services.update(Notification, req.params.notification_id, req.body, res);
	});

app.use('/api', router);

app.listen(8080);
console.log('Magic happens on port 8080');
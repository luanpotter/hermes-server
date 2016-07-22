var express	= require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var services = require('../services/services');
var jobRequestService = require('../services/jobs_request.services');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/osi-7');

//fixtures:start
var NotificationFixtures = require('../fixtures/notification');
var ServerFixtures = require('../fixtures/server');
var ServiceFixtures = require('../fixtures/service');
var TimerFixtures = require('../fixtures/timer');
var JobRequestFixtures = require('../fixtures/job-request');
//fixtures:finish

var Notification = require('../models/notification');
var Server = require('../models/server');
var Service = require('../models/service');
var Timer = require('../models/timer');
var JobRequest = require('../models/job-request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

var router = express.Router();

router.use(function(req, res, next) {
	next();
});

router.route('/notifications')
	.get(function(req, res) {
		services.findAll(Notification, res, req.query);
	})
	.post(function(req, res) {
		services.create(Notification, req.body, res);
	});

router.route('/notifications/:notification_id')
	.get(function(req, res) {
		services.findById(Notification, req.params.notification_id, res);
	})
	.put(function(req, res) {
		services.update(Notification, req.params.notification_id, req.body, res);
	});

router.route('/servers')
	.get(function(req, res) {
		services.findAll(Server, res, req.query);
	});

router.route('/services')
	.get(function(req, res) {
		services.findAll(Service, res, req.query);
	});

router.route('/timers')
	.get(function(req, res) {
		services.findAll(Timer, res, req.query);
	});

router.route('/jobs_request')
	.get(function(req, res) {
		services.findAll(JobRequest, res, req.query);
	})
	.post(function(req, res) {
		jobRequestService.create(req.body, res);
	});

router.route('/jobs_request/:job_request_id')
	.put(function(req, res) {
		delete req.body.active;
		services.update(JobRequest, req.params.job_request_id, req.body, res);
	});

app.use('/api', router);

app.listen(8080);
console.log('Magic happens on port 8080');

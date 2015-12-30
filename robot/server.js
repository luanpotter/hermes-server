var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/osi-7');
var config = require('./app/config');
var services = require('../services/services');

//fixtures:start
var JobRequestFixtures = require('../fixtures/job-request');
var ServerFixtures = require('../fixtures/server');
var ServiceFixtures = require('../fixtures/service');
var TimerFixtures = require('../fixtures/timer');
//fixtures:finish

var Server = require('../models/server');
var Service = require('../models/service');
var Timer = require('../models/timer');

var jobs = require('./app/jobs');

jobs.newInstance(config.jobTypes.TIMERS, function (response) {
	services.findLastRunId(Timer, function(lastRunId) {
			JSON.parse(response).forEach(function (newTimer) {
				newTimer.run_id = lastRunId + 1;
				services.create(Timer, newTimer);
			});
		});
}).start();

jobs.newInstance(config.jobTypes.SERVERS, function (response) {
	services.findLastRunId(Server, function(lastRunId) {
			JSON.parse(response).forEach(function (newServer) {
				newServer.run_id = lastRunId + 1;
				services.create(Server, newServer);
			});
		});
}).start();

jobs.newInstance(config.jobTypes.SERVICES, function (response) {
	services.findLastRunId(Service, function(lastRunId) {
			JSON.parse(response).forEach(function (newService) {
				newService.run_id = lastRunId + 1;
				services.create(Service, newService);
			});
		});
}).start();

console.log('Robot on!');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/osi-7');
var config = require('./app/config');

//fixtures:start
var JobRequestFixtures = require('../fixtures/job-request');
//fixtures:finish

var jobs = require('./app/jobs');

jobs.newInstance(config.jobTypes.TIMERS, function (response) {
	console.log(response);
}).start();

console.log('Robot on!');
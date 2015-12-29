var JobRequest = require('../models/job-request');

JobRequest.remove(function () {
});

var timers = new JobRequest();
timers.url = 'http://jsonplaceholder.typicode.com/posts';
timers.type = 'TIMERS';
timers.save();	
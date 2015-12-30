var JobRequest = require('../models/job-request');

JobRequest.remove(function () {
});

var timers = new JobRequest();
timers.url = 'http://demo7051396.mockable.io/timers';
timers.type = 'TIMERS';
timers.active = true;
timers.save();	

var servers = new JobRequest();
servers.url = 'http://demo7051396.mockable.io/servers';
servers.type = 'SERVERS';
servers.active = true;
servers.save();	

var services = new JobRequest();
services.url = 'http://demo7051396.mockable.io/services';
services.type = 'SERVICES';
services.active = true;
services.save();	

var timersOld = new JobRequest();
timersOld.url = 'http://jsonplaceholder.typicode.com/posts';
timersOld.type = 'TIMERS';
timersOld.active = false;
timersOld.save();


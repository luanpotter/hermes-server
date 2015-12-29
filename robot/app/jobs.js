var Job = require('timer-jobs');
var request = require('request');

var JobRequest = require('../../models/job-request');
var config = require('./config');

var execRequest = function (url, callback) {
	request(url, function (error, response, body) {
		if (response.statusCode == 200) {
			callback(body)
  		} else {
  			console.error(error);
  		}
	});
};

exports.newInstance = function (jobType, callback) {
	return new Job({interval: config.interval}, function(done) {
		JobRequest.findOne()
		.where('type', jobType)
		.where('active', true)
		.exec(function(err, jobsRequests) {
			execRequest(jobsRequests.url, callback);
			done();
		});
	});
};
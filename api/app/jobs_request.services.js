var _ = require('underscore');
var services = require('./services');
var JobRequest = require('../../models/job-request');

var saveModel = function (form, res) {
	return function () {
		form.active = true;
		var model = new JobRequest();	
		_.extend(model, form);
		model.save(function(err) {
			res.json({
				message: 'Created!'
			});
		});
	};
};

exports.create = function (form, res) {
	JobRequest.find()
		.where('active', true)
		.where('type', form.type)
		.exec(function (err, jobsRequest) {
			jobsRequest.forEach(function (jobRequest) {
				console.log(jobRequest);
				_.extend(jobRequest, { active: false });
				services.update(JobRequest, jobRequest._id, jobRequest, saveModel(form, res));
			});
		});
};
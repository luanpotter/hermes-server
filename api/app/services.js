var _ = require('underscore');

var simpleFindAll = function (Model, callback) {
	Model.find(callback);
};

var skipLimitFindAll = function (Model, skip, limit, callback) {
	Model.find().skip(skip).limit(limit).exec(callback);
};

var widgetRunIdFindAll = function (Model, run_id, callback) {
	var lastRunId = run_id;
	if(run_id === 'last')
		Model.findOne().sort('-run_id').exec(function(err, last) {
			lastRunId = last.run_id;
			Model.find({ run_id: lastRunId }).exec(callback);
		});
};

exports.findById = function (Model, id, res) {
	Model.findById(id, function(err, result) {
		res.json(result);
	});
};

exports.findAll = function (Model, res, query) {
	var callback = function(err, result) {
		res.json(result);
	};

	if(query && query.skip && query.limit) {
		skipLimitFindAll(Model, query.skip, query.limit, callback);
	} else if(query && query.run_id) {
		widgetRunIdFindAll(Model, query.run_id, callback);
	} else {
		simpleFindAll(Model, callback);
	}
};

exports.create = function (Model, form, res) {
	var model = new Model();	
	_.extend(model, form);
	model.save(function(err) {
		res.json({
			message: 'Created!'
		});
	});
};

exports.update = function (Model, id, form, res) {
	Model.findById(id, function(err, model) {
		_.extend(model, form);
		model.save(function(err) {
			res.json({
				message: 'Updated!'
			});
		});
	});
}
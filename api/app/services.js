var _ = require('underscore');

var widgetRunIdFindAll = function (Model, run_id, callback) {
	var lastRunId = run_id;
	if(run_id === 'last')
		Model.findOne().sort('-run_id').exec(function(err, last) {
			lastRunId = last.run_id;
			Model.find({ run_id: lastRunId }).exec(callback);
		});
};

var simpleFindAll = function (Model, query, callback) {
	var q = Model.find();
	for (var key in query) {
 		if (query.hasOwnProperty(key) && key != 'skip' && key != 'limit') {
    		q = q.where(key, query[key]);
  		}
	}
	if(query.skip)
		q = q.skip(query.skip);
	if(query.limit)
		q = q.limit(query.limit);

	q.exec(callback);
};

var isFunction = function (obj) {
	return obj && typeof obj == 'function';
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

	if(query && query.run_id) {
		widgetRunIdFindAll(Model, query.run_id, callback);
	} else {
		simpleFindAll(Model, query, callback);
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
			if (isFunction(res))
				res();
			else
				res.json({
					message: 'Updated!'
				});
		});
	});
}
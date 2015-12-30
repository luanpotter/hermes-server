var _ = require('underscore');

var widgetRunIdFindAll = function (Model, query, callback) {
	delete query.run_id;
	getLastRunId(Model, function (lastRunId) {
		simpleQueries(Model.find().where('run_id', lastRunId), query,callback);
	});
};

var getLastRunId = function(Model, callback) {
	Model.findOne().sort('-run_id').exec(function(err, last) {
		callback(last.run_id);
	});
};

var simpleFindAll = function (Model, query, callback) {
	simpleQueries(Model.find(), query, callback);
};

var simpleQueries = function (q, query, callback) {
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

exports.findLastRunId = getLastRunId;

exports.findById = function (Model, id, res) {
	Model.findById(id, function(err, result) {
		res.json(result);
	});
};

exports.findAll = function (Model, res, query) {
	var callback = function(err, result) {
		res.json(result);
	};

	if(query && query.run_id == 'last') {
		widgetRunIdFindAll(Model, query, callback);
	} else {
		simpleFindAll(Model, query, callback);
	}
};

exports.create = function (Model, form, res) {
	var model = new Model();	
	_.extend(model, form);
	model.save(function(err) {
		if(res)
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
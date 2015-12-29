var express	= require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/osi-7');
var Bear = require('../models/bears');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	next();
});

router.route('/bears')
	.post(function(req, res) {
		var bear = new Bear();	
		bear.name = req.body.name;
		bear.save(function(err) {
			res.json({ message: 'Bear created!' });
		});		
	})
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			res.json(bears);
       	});
	});

router.route('/bears/:bear_id')
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			res.json(bear);
		});
	})
	.put(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            bear.name = req.body.name;
            bear.save(function(err) {
                res.json({ message: 'Bear updated!' });
            });
        });
	})
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            res.json({ message: 'Successfully deleted' });
        });
     });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
var express = require('express');

var router = express.Router();

module.exports = function(app){

	// only requests to /api/* will be sent to our "router"
	app.use('/api', router);

	// API Routes
	router.get('/', function(req, res){

	});

	// Angular routing
	app.get('*', function(req, res){
		res.sendfile('./public/index.html')
	});
}
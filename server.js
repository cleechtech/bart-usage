var express = require('express'),
	app = express(),
	bodyParser = require('body-parser')
	cors = require('cors');

var port = process.env.PORT || 8080;

// CONFIG
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// var methodOverride = require('method-override');
// app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// ROUTES
require('./server/routes')(app);

// start server
app.listen(port, function(){
	console.log('server started on port ' + port);
});
exports = module.exports = app;
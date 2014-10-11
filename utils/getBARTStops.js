// node getBARTStops

var fs = require('fs'),
	path = require('path'),
	_ = require('lodash'),
	filepath = './../public/data/entries';

fs.exists(filepath, function (exists) {
	if(!exists){
		console.error('Error: Filepath does not exist. Run this script from inside utils directory')
		process.exit(1)
	}
});

fs.readdir(filepath, function(err, files){
	var output = fs.createWriteStream('./../public/data/bart-stops.json');

	output.on('error', function(err){ console.error(err); });

	var stopNames = _.map(files, function(stopFile){
		var stopName = stopFile.split('.')[0];
		return stopName;
	})

	output.write(JSON.stringify(stopNames));

	output.end();
	console.log('BART stops written to /public/data/bart-stops.json')
});
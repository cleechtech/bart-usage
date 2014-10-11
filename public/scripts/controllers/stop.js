'use strict';

app.controller('StopCtrl', function($scope, $stateParams, $http, $rootScope){
	var stopName = $stateParams.stopName;

	$scope.stopName = stopName;

	$scope.localEntries = $rootScope.entries[stopName];
	$scope.localExits = $rootScope.exits[stopName];

	var entriesByDay = getDayTotals($rootScope.entries[stopName]);
	var exitsByDay = getDayTotals($rootScope.exits[stopName]);

	// format for chartjs directive
	var chartByDay = {
		labels : _.keys(entriesByDay),
	    datasets : [
	      {
	        fillColor : "rgba(220,220,220,0.5)",
	        strokeColor : "rgba(220,220,220,1)",
	        pointColor : "rgba(220,220,220,1)",
	        pointStrokeColor : "#fff",
	        data : _.values(entriesByDay)
	      },
	      {
	        fillColor : "rgba(151,187,205,0.5)",
	        strokeColor : "rgba(151,187,205,1)",
	        pointColor : "rgba(151,187,205,1)",
	        pointStrokeColor : "#fff",
	        data : _.values(exitsByDay)
	      }
	    ]
	};

	$scope.usageByDay = {};
	$scope.usageByDay.data = chartByDay;

});

function getDayTotals(hourTotalsByDay){
	return _.mapValues(hourTotalsByDay, function(hourTotals){
		return _.reduce(hourTotals, function(sum, num){ return sum + num; })
	});
}
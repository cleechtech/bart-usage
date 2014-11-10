'use strict';

app.controller('HomeCtrl', function($scope, $http) {
	$scope.welcomeMessage = true;
    $http.get('data/bart-stops.json').then(function(res){
        $scope.BARTStops= res.data;
    });
});
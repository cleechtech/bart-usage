'use strict';

var app = angular.module('bart-usage', [
	'ui.router',
  'chartjs-directive'
]);

// routing
app.config(function($stateProvider, $urlRouterProvider){    
  $stateProvider
      .state("home", {
          url: "/",
          controller: 'HomeCtrl',
          templateUrl: 'views/home.html'
      })
      .state('stop', {
        url: '/stop/:stopName',
        controller: 'StopCtrl',
        templateUrl: 'views/stop.html'
      })
      .state("about", {
          url: "/about",
          templateUrl: 'views/about.html'
      });
  
  $urlRouterProvider.otherwise("/");
});

app.run(function($http, $rootScope){
  $http.get('data/entriesexits.json').then(function(res){
      $rootScope.entries = res.data.entries;
      $rootScope.exits = res.data.exits;
    })
})

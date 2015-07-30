'use strict';

/* App Module */

var sampleApp = angular.module('sampleApp', [
  'ngRoute']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl'
    }).
    when('/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowCtrl'
    }).
    otherwise({
      redirectTo: '/add'
    });
}]);
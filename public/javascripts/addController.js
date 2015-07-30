'use strict';


var add_record = function($scope, $http){
  var req_url;
  console.log($scope.formData);
  req_url = $http.post('/addrecord', $scope.formData);
}


angular.module('sampleApp').controller('AddCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.add = function(){
      add_record($scope, $http);
      $scope.formData = {};
    }
  }]);

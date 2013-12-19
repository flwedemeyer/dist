var bkApp = angular.module('bkApp', []);

  // create the controller and inject Angular's $scope
  bkApp.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
  });
'use strict';

/**
 * @ngdoc function
 * @name testFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testFireApp
 */
angular.module('testFireApp')
  .controller('MainCtrl', function ($scope, Ref, $firebaseArray) {
  	$scope.today = $firebaseArray(Ref.child('stats').limitToLast(1));
  	$scope.today.$loaded().then(function(){
	  	$scope.hours = 132;
	  	$scope.newUsers = Object.keys($scope.today[0].new_users).length;
	    $scope.averageMins = 45;
	    $scope.onCamUsers = Object.keys($scope.today[0].on_cam).length;
	    $scope.blabs = Object.keys($scope.today[0].blabs).length;
  	});
  });

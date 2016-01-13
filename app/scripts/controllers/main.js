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
  	$scope.today = $firebaseArray(Ref.child('summary').limitToLast(1));
  });

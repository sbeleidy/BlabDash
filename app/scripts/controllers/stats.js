'use strict';
/**
 * @ngdoc function
 * @name testFireApp.controller:StatsCtrl
 * @description
 * # StatsCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('testFireApp')
  .controller('StatsCtrl', function ($scope, Ref, $firebaseArray) {
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    $scope.stats = $firebaseArray(Ref.child('stats').limitToLast(3));

    // There should be a way to simply access each objects keys through firebase
    // Current way is inefficient - needs updating
    $scope.stats.$loaded().then(function(){
      $scope.blabs = $scope.stats.map(function(obj){
        return Object.keys(obj.blabs).length;
      });
      $scope.newUsers = $scope.stats.map(function(obj){
        return Object.keys(obj.new_users).length;
      });
      $scope.onCam = $scope.stats.map(function(obj){
        return Object.keys(obj.on_cam).length;
      });
      $scope.uniques = $scope.stats.map(function(obj){
        return Object.keys(obj.unique).length;
      });
      $scope.labels = $scope.stats.map(function(obj){
        return new Date(parseInt(obj.$id));
      });
      $scope.data = [
        $scope.blabs,
        $scope.newUsers,
        $scope.onCam,
        $scope.uniques
      ];
    });
    
    $scope.series = ['Blabs', 'New Users', 'On Cam', 'Uniques'];


  });



//var epoch = require('epoch.js');
//
/////----------------------- GET DAY --------------------------------------
//
//var unix_time = function () {
//    var e = epoch();
//    var unix = e.time();
//
////-- GET MIN    
//    var min_block = unix / 60000;
//    var min_clean = parseInt(min_block);
//    var min = min_clean * 60000;
////-- GET DAY
//    var day_block = min / 86400000;        
//    var day_clean = parseInt(day_block);
//    var day = day_clean * 86400000;
//    
//    return day;
//}

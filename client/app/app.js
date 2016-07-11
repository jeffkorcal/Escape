var app = angular.module('escape', []);

app.controller('timeController', function($scope, $interval) {
    
    var tick = function() {
      $scope.today = Date.now();
    }
    tick();
    $interval(tick, 1000);

  });
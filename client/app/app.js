var app = angular.module('escape', []);


app.controller('menuController', function($scope, Image) {
  $scope.author = '';
  $scope.credit = '';
  $scope.url = '';
  $scope.grayScaled = true;

  $scope.changePicture = function() {
    Image.getRandomPic().then(function(data){
      $scope.author = data.author;
      $scope.credit = data.author_url;
      $scope.url = 'https://unsplash.it/800/600?image=' + data.id;
      $scope.grayScaled = true;
    });
  };

  $scope.grayScale = function() {
    if($scope.grayScaled) {
      var url = $scope.url;
      var urlArr = url.split('');
      urlArr.splice(20, 0, 'g', '/');
      url = urlArr;
      $scope.url = url.join('');
      $scope.grayScaled = false;
    }
  };

  $scope.changePicture();

});

app.controller('timeController', function($scope, $interval) {
    
  var tick = function() {
    $scope.today = Date.now();
  }
  tick();
  $interval(tick, 1000);

});

app.factory('Image', function ($http) {

  var getRandomPic = function () {
    return $http({
      method: 'GET',
      url: '/api/images/'
    }).then(function (res) {
      return res.data;
    });
  }

  return {
    getRandomPic: getRandomPic
  } 

});


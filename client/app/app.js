var app = angular.module('escape', ['ngRoute']);

////////////////////////////////////////////////
//Config
////////////////////////////////////////////////
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './app/partials/main.html',
      controller: 'mainController'
    })
    .when('/signin', {
      templateUrl: './app/partials/signin.html',
      controller: 'signupController'
    })
    .when('/signup', {
      templateUrl: './app/partials/signup.html',
      controller: 'signinController'
    });
});

////////////////////////////////////////////////
//Main
////////////////////////////////////////////////
app.controller('mainController', function($scope, $interval, Image) {
  $scope.author = '';
  $scope.credit = '';
  $scope.url = 'https://unsplash.it/200/300/?random';
  $scope.grayScaled = true;

  //click handler for changing pictures
  $scope.changePicture = function() {
    Image.getRandomPic().then(function(data){
      $scope.author = data.author;
      $scope.credit = data.author_url;
      $scope.url = 'https://unsplash.it/800/600?image=' + data.id;
      $scope.grayScaled = true;
    });
  };

  //click handler for grayScale
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

  //Clock & Date Control
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

////////////////////////////////////////////////
//Signin & Signup
////////////////////////////////////////////////
app.controller('signupController', function($scope) {});
app.controller('signinController', function($scope) {});


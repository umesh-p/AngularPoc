var phonecatApp = angular.module('phonecatApp', ['ngRoute','spoonFeedController']);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomePageController'
      }).
	  when('/Fruits', {
        templateUrl: 'partials/fruits.html',
        controller: 'FruitsController'
      }).
	  when('/MixedFruit', {
        templateUrl: 'partials/MixedFruit.html',
        controller: 'MixedFruitController'
      }).
	   when('/Sprout', {
        templateUrl: 'partials/Sprout.html',
        controller: 'SproutController'
      }).
	  when('/MixedSalad', {
        templateUrl: 'partials/MixedSalad.html',
        controller: 'MixedSaladController'
      }).
	  when('/Snacks', {
        templateUrl: 'partials/Snacks.html',
        controller: 'SnacksController'
      }).
	  when('/FruitsSalads', {
        templateUrl: 'partials/FruitsSalads.html',
        controller: 'FruitsSaladsController'
      }).
	  when('/Lounch', {
        templateUrl: 'partials/Lounch.html',
        controller: 'LounchController'
      }).
      otherwise({
        redirectTo: ''
      });
  }]);

  

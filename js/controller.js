var margin=250;

var spoonFeedController = angular.module('spoonFeedController', []);

 spoonFeedController.service('productService', function() {
  var productList,absUrl;
		
	  this.addProduct = function(newObj) {
		  productList=newObj;
	  };
	  this.getProducts = function(){
		  return productList;
	  };
	  this.getUrl = function() {
		 return absUrl;
	  };
	  this.setUrl = function(newObj){ 
		  absUrl=newObj;
	  };
	  
});
/*
spoonFeedController.service('MenuControl', function() {
 
	  this.toogleVal = function(margin) {
		 if(margin>0)
			{
			$scope.margin=0;
			}
			else{
			$scope.margin=250;
			}
	  };
	  	  
});
//saurabh.bag@gmail.com

*/

spoonFeedController.controller('HomePageController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
 	$scope.margin=margin;
	$scope.changeUrl=function(lastUrl){
		productService.setUrl($location.absUrl());
		window.location.href=$location.absUrl()+lastUrl;
	}
	$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }

}]);

spoonFeedController.controller('FruitsController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);

spoonFeedController.controller('MixedFruitController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);

spoonFeedController.controller('SproutController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);

spoonFeedController.controller('SnacksController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);

spoonFeedController.controller('MixedSaladController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);

spoonFeedController.controller('FruitsSaladsController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);

spoonFeedController.controller('LounchController', ['$scope', '$routeParams','$http','$rootScope', '$location','productService',
		function($scope, $routeParams, $http,$rootScope,$location,productService) {
		$scope.margin=margin;
		$scope.changeUrl=function(lastUrl){
		   window.location.href=productService.getUrl()+lastUrl;
		}
		$scope.toggleMenu = function(margin) {
		if(margin>0)
		{
		$scope.margin=0;
		}
		else{
		$scope.margin=250;
		}
    }
}]);



/*!
** ngRouter App
** Licensed under the Apache License v2.0
** http://www.apache.org/licenses/LICENSE-2.0
** Built by Jay Kanakiya ( @techiejayk )
**/

"use strict";

var App = angular.module("example",["ngRoute"]);

App.controller("ExmpCtrl",function  ($scope,$route,$location) {
	$scope.message = "Takes it from Parent";
	$scope.debug = $route;
});

App.controller("ChildCtrl1",function  ($scope,$route) {
	$scope.message = "Link 1 has been Visited";
	$scope.debug = $route;
});

App.controller("ChildCtrl2",function  ($scope,$route) {
	$scope.message = "Link 2 has been Visited";
	$scope.debug = $route;
});

App.config(function  ($routeProvider,$locationProvider) {
	$routeProvider
	.when("/link1",{
		templateUrl : "js/hello.html" ,
		controller : "ChildCtrl1"
	})
	.when("/link2",{
		templateUrl : "js/hello2.html",
		controller : "ChildCtrl2"
	})
	.otherwise({
		templateUrl : "js/hello3.html"
	});
	$locationProvider.html5Mode(true);//required to work in plnkr
});
/*!
** Example App
** Licensed under the Apache License v2.0
** http://www.apache.org/licenses/LICENSE-2.0
** Built by Jay Kanakiya ( @techiejayk )
**/

"use strict";

var App = angular.module("example",["ngRoute"]);

App.controller("ExmpCtrl",function  ($scope) {
	$scope.message = "Hello World";
});

App.config(function  ($routeProvider,$locationProvider) {
	$routeProvider.when("/hello",{ templateUrl : "js/hello.html"});
	$locationProvider.html5Mode(true);
});
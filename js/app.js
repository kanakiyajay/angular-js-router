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

App.run(function($rootScope, $location) {
    // register listener to watch route changes
    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
      if ( $rootScope.loggedUser == null ) {
        // no logged user, we should be going to #login
        if ( next.$$route.templateUrl == "js/hello.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/" );
        }
      }
    });
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

/*
resolve - {Object.<string, function>=} - An optional map of dependencies which should be injected into the controller.
	If any of these dependencies are promises,the router will wait for them all to be resolved or one to be rejected
	before the controller is instantiated.
	If all the promises are resolved successfully, the values of the resolved promises
	are injected and $routeChangeSuccess event is fired.
	If any of the promises are rejected the $routeChangeError event is fired.
	The map object is:
		key – {string}: a name of a dependency to be injected into the controller.
		factory - {string|function}: If string then it is an alias for a service.
		Otherwise if function, then it is injected and the return value is treated as the dependency.
		If the result is a promise, it is resolved before its value is injected into the controller.
		Be aware that ngRoute.$routeParams will still refer to the previous route within these resolve functions.

	Use $route.current.params to access the new route parameters, instead.
*/
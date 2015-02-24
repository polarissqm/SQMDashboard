'use strict';

angular.module(
		'dashboardApp',
		[ 'ngGrid', 'ngCookies', 'dashboardApp.services',
				'dashboardApp.filters', 'dashboardApp.directive' ])
// .constant('DATA_END_DATE', new Date('2013,09,30'))
.config([ '$routeProvider', '$httpProvider',
				function($routeProvider, $httpProvider, $rootScope) {
					$routeProvider.when('/dashboard', {
						templateUrl : 'pages/index',
						controller : dashboardController
					});
					$routeProvider.when('/logged-out', {
						templateUrl : 'pages/logout',
						controller : logoutController
					});
					$routeProvider.when('/login', {
						templateUrl : 'pages/login',
						controller : loginController
					});
					$routeProvider.when('/login', {
						templateUrl : 'pages/login',
						controller : loginController
					});

					$routeProvider.otherwise({
						redirectTo : 'pages/login'
					});

					
				}]);

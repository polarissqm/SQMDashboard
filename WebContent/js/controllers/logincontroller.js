'use strict';

var dashboardApp= angular.module('dashboardApp',[]);
 
dashboardApp.controller("loginController",function($scope){
	var serviceUrl="/user/login";
	
	 $scope.userlogin = function() {
	   console.log("Inside login controller"+$scope.username);    
	    
	 };
});



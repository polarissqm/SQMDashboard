	'use strict';

	var dashboardApp= angular.module('dashboardApp',[]);
	 
	dashboardApp.controller("signupController",['$scope', '$http',function($scope,$http){
		
		
	
		
		 $scope.saveUserInfo = function(firstname) {
		        var res =$http.post('/SQMDashboard/user/addUser/' + firstname);
		        res.success(function(data, status, headers, config) {
		        	$scope.message = data;
		        	console.log("Added Successfully...!");
		        });
		        
		        res.error(function(data, status, headers, config) {
					alert( "failure message: " + JSON.stringify({data: data}));
				});	
		        $scope.firstname = '';
		    };
		    
		  /*  $scope.fetchUsersList = function() {
		        $http.get('user/userlist').success(function(userList){
		            $scope.users = userList;
		            
		            console.log("Users list from mongodb>>>>>"+$scope.users);
		        });
		    };   */ 
	     
		 
	}]);



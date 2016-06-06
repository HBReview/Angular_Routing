var app=angular.module("myApp", ["ngRoute"])
     .config(function($routeProvider){
     	$routeProvider
          .when("/home", {
     	   	templateUrl:"html/home.html",
     	   	controller:"homeController"
     	   })
          .when("/courses", {
     	   	templateUrl:"html/courses.html",
     	   	controller:"coursesController"
     	   })
          .when("/students", {
     	   	templateUrl:"html/students.html",
     	   	controller:"studentsController"
     	   })
          .otherwise({
               redirectTo:'/'
          })
     	
     	})
     .controller("homeController", function($scope){
     	$scope.message="Home Page";
     })
     .controller("coursesController", function($scope){
     	$scope.courses=["C", "C++", "C#","ASP", "PYTHON"];
     })
     .controller("studentsController", function($scope, $http){
     	$http.get("data.json").success(function(response){
     		$scope.myData=response.records;
     	});
     });
     
     
     
     
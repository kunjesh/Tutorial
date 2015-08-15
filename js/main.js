var studentsModule= angular.module('students',[]);
studentsModule.controller('StudentController',['$scope','$http',function($scope,$http){
	/*Initialize variables*/
	$scope.studentFirstName = '';
	$scope.studentLastName = '';
	$scope.studentAge = '';
	$scope.studentDob = '';
	
	$scope.sutdentsJson = '';
	
	/*Declaring function*/
	$scope.setAllVariableValues = function(firstName, lastName, age, dob) {
		$scope.studentFirstName = firstName;
		$scope.studentLastName = lastName;
		$scope.studentAge = age;
		$scope.studentDob = dob;
		
		var postRequest = {"first_name": $scope.studentFirstName, "last_name": $scope.studentLastName, "age": $scope.studentAge, "dob": $scope.studentDob};
		
		$http.post("http://localhost/AngularJS/students.php", postRequest)
		.success(function(){
			$scope.getResult();
		});
	};
	
	$scope.myFirstApp = 'My first app in AngularJS';	
	
	$scope.getResult = function(){
		$http.get("http://localhost/AngularJS/students.php")
		.success(function (response) {$scope.sutdentsJson = response;});
	}
	$scope.getResult();
}]);
/**
 * Created by Jairo Martinez on 10/20/14.
 */

app.controller('Demo2Ctrl', function ($scope) {
	$scope.submitForm = function(){

	}
});

app.directive('formWidget',function(){
	return {
		restrict: 'E',
		templateUrl: './partials/widget/form.html'
	}
});

app.directive('scriptForm',function(){
	return {
		restrict: 'E',
		templateUrl: 'myForm.html'
	}
});

app.directive('formFullName', function(){
	return {
		restrict: 'E',
		template: '<label>Name:</label> <input ng-model="name" ng-change="checkName()" type = "text"/>',
		controller: function($scope){
			$scope.checkName = function(){
				if($scope.name.indexOf('J') > -1){
					$scope.name = 'You Meant H, Right?';
				}
			}
		}
	}
});

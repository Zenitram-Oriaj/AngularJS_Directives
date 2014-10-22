app.controller('StartCtrl', function($scope){
	$scope.lastName = 'Jones';
});

app.directive('anotherDirective', function(){
	return {
		restrict: 'EA',
		link: function(scope, element){
			element.html('Your Last Name Is ' + scope.lastName);
		}
	}
});
var app = angular.module("app", []);

app.directive('navBar', function(){
	return{
		restrict: 'E',
		templateUrl:'../partials/navBar.html',
		link: function(scope){
			scope.projectName = 'Nav-Bar Directive Example'
		}
	}
});

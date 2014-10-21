var app = angular.module("app",['ngRoute','ngResource','ui.bootstrap','ngWidget']);

app.run(function($templateCache){
	$templateCache.put('keyHello','<h1>Hello From Template Cache</h1>')
});

app.controller('AppCtrl', function ($scope) {
	$scope.showTotalCounter = false;
	$scope.totalCnt = 0;


	$scope.showCounter = function(){
		$scope.totalCnt = 0;
		$scope.showTotalCounter = true;
	};

	$scope.hideCounter = function(){
		$scope.showTotalCounter = false;
	};

	$scope.addAllPresses = function (val) {
		$scope.totalCnt += val;
	};
});

app.controller('MenuCtrl',function($scope){
	$scope.user = {};

	$scope.status = {
		isopen: false
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};
});


app.directive('menuBar', function () {
	return {
		restrict:    'E',
		templateUrl: './partials/MenuBar.html',
		controller:  'MenuCtrl',
		link: function(s,e,a) {
			e.bind('mouseover',function(){
				e.css('cursor', 'pointer');
			});
		}
	}
});

app.directive('clock', function () {
	return {
		restrict:   'A',
		controller: function ($scope) {
			$scope.dateTime = new Date();
			setInterval(function () {
				$scope.$apply(function () {
					$scope.dateTime = Date.now();
				});
			}, 60 * 1000);
		}
	}
});

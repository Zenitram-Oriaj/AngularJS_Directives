var app = angular.module("app", []);

app.directive('navBar', function () {
	return {
		restrict:    'E',
		templateUrl: '../partials/navBar.html',
		link:        function (scope) {
			scope.projectName = 'Directives';
		}
	}
});

app.controller('btnCtrl', function ($scope) {
	$scope.btn = {
		total: 0
	};
	$scope.updateCnt = function (val) {
		$scope.$apply(function () {
			$scope.btn.total = $scope.btn.total + val;
		});
	}
});

app.directive('btnEvent', function () {
	return {
		link: function (scope, el) {
			var cnt = 0;
			var prev = 'btn-primary';
			function toggle() {
				prev = (prev !== 'btn-primary') ? 'btn-primary' : 'btn-danger';
			}
			el.bind('click', function () {
				cnt++;
				scope.updateCnt(1);
				el.html('Button Pressed ' + cnt.toString());
				el.removeClass(prev);
				toggle();
				el.addClass(prev);
			});
		}
	};
});

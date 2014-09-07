var app = angular.module("app", []);

app.directive('navBar', function () {
	return {
		restrict:    'E',
		templateUrl: '../partials/navBar.html',
		link:        function (s,e,a) {
			s.projectName = 'Directives';
		}
	}
});

app.controller('wdgtCtrl', function ($scope) {
	$scope.wdgt = {};

	$scope.wdgt.head = '<h3>This is the Header</h3>';
	$scope.wdgt.foot = '<h4>This is the Footer</h4>';

	$scope.wdgt.body = '<h3>This is the Body</h3>' + '<button class="btn btn-primary btn-block">I AM A Button</button>';
});

app.directive('widget',function(){
	return {
		restrict: 'E',
		templateUrl: '../partials/widget.html',
		link: function(s,e,a){
			$('#head').html(s.wdgt.head);
			$('#body').html(s.wdgt.body);
			$('#foot').html(s.wdgt.foot);
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
		link: function (s,e,a) {
			var cnt = 0;
			var x = a.off || 'primary';
			var y = a.on || 'danger' ;
			var t = x;

			e.addClass('btn-' + t);

			function toggle() {
				e.removeClass('btn-' + t);
				t = (t !== y) ? y : x;
				e.addClass('btn-' + t);
			}

			e.bind('click', function () {
				cnt++;
				s.updateCnt(1);
				e.html('Button Pressed ' + cnt.toString());
				toggle();
			});
		}
	};
});
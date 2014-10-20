/**
 * Created by Jairo Martinez on 9/13/14.
 */

app.controller('AppCtrl', function ($scope) {
	$scope.totalCnt = 1;
	$scope.addAllPresses = function (val) {
		$scope.totalCnt += val;
	};
});

app.controller('MenuCtrl',function($scope){
	$scope.user = {};

	$scope.status = {
		isopen: false
	};

	$scope.toggled = function(open) {

	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};
});

app.controller('Demo1Ctrl', function ($scope) {

});

app.controller('Demo2Ctrl', function ($scope) {
	$scope.submitForm = function(){

	}
});

app.controller('Demo3Ctrl', function ($scope) {

});

app.controller('wdgtCtrl', function ($scope) {
	$scope.wdgt = {};

	$scope.wdgt.head = '<h3>This is the Header</h3>';
	$scope.wdgt.foot = '<h4>This is the Footer</h4>';
	$scope.wdgt.body = '<h3>This is the Body</h3>' + '<button class="btn btn-primary btn-block">I AM A Button</button>';
});

app.controller('btnCtrl', function ($scope) {
	$scope.btn = {
		total: 0
	};
	$scope.updateCnt = function (val) {
		$scope.$apply(function () {
			$scope.btn.total = $scope.btn.total + val;
		});
		$scope.addAllPresses($scope.btn.total);
	}
});

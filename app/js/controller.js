/**
 * Created by Jairo Martinez on 9/13/14.
 */

app.controller('D1Controller', function($scope){

});

app.controller('D2Controller', function($scope){

});

app.controller('D2Controller', function($scope){

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
	}
});

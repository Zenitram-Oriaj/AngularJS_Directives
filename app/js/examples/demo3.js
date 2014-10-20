/**
 * Created by Jairo Martinez on 10/20/14.
 */

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
	return function (s, e, a) {
		var cnt = 0;
		var x = a.off || 'action';
		var y = a.on || 'caution';
		var t = x;
		var myName = '';

		e.addClass('button-' + t);

		function toggle() {
			e.removeClass('button-' + t);
			t = (t !== y) ? y : x;
			e.addClass('button-' + t);
		}

		e.bind('click', function () {
			if (myName.length == 0) {
				myName = e.html();
			}
			cnt++;
			s.updateCnt(1);
			e.html(myName + ' : Presses = ' + cnt.toString());
			toggle();
		});
	}

});
/**
 * Created by Jairo Martinez on 10/20/14.
 */

app.service('DataService', function($http){
	this.collect = function(fileName){
		return $http.get('./json/' + fileName, {});
	}
});

app.controller('voteCtrl', function ($scope) {
	$scope.votes = {
		total: 0
	};
	$scope.updateCnt = function (val) {
		$scope.$apply(function () {
			$scope.votes.total = $scope.votes.total + val;
			$scope.addAllPresses(val);
		});
	}
});


app.directive('voteWidget', function (DataService) {
	return {
		restrict: 'E',
		scope:true,
		templateUrl: './partials/widget/votingWidget.html',
		controller: 'voteCtrl',
		link: function (s, e, a) {
			s.title = a.title;

			DataService.collect(a.file).then(
				function(res){
					s.items = res.data;
				},
				function(err){
					console.log(err);
					s.items = [{name:'ERROR'}];
				});
		}
	};
});


app.directive('voteEvent', function () {
	return {
		link: function (s, e, a) {
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
				if(myName.length == 0){
					myName = e.html();
				}
				cnt++;
				s.updateCnt(1);
				e.html(myName + ' : Votes = ' + cnt.toString());
				toggle();
			});
		}
	};
});

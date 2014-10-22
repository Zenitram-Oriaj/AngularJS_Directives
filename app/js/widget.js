/**
 * Created by Jairo Martinez on 10/20/14.
 */

angular.module('ngWidget',[])

.directive('widget', function () {
	return {
		restrict:    'E',
		templateUrl: './partials/widget.html',
		controller:  function ($scope) {
			$scope.wdgt = {
				head: '',
				body: '',
				foot: ''
			};
		},
		link:        function (s, e, a) {
			$('#head').html(s.wdgt.head);
			$('#body').html(s.wdgt.body);
			$('#foot').html(s.wdgt.foot);
		}
	}
})

.directive('widgetOptions', function () {
	return {
		restrict: 'A',
		link:     function (s, e) {
			e.bind('click', function () {
				var wcontent = $(e).parent().parent().parent().next('.widget-body');
				console.log(e);
				if (wcontent.is(':visible')) {
					$('.widget-icon-btn').children('i')
						.removeClass('fa fa-chevron-up')
						.addClass('fa fa-chevron-down');
				} else {
					$('.widget-icon-btn').children('i')
						.removeClass('fa fa-chevron-down')
						.addClass('fa fa-chevron-up');
				}
				wcontent.toggle(250);
			});
		}
	}
});
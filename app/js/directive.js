/**
 * Created by Jairo Martinez on 9/13/14.
 */

app.directive('navBar', function () {
	return {
		restrict:    'E',
		templateUrl: './partials/navBar.html',
		link:        function (s, e, a) {
			s.projectName = 'Directives';
		}
	}
});

app.directive('widget', function () {
	return {
		restrict:    'E',
		templateUrl: './partials/widget.html',
		link:        function (s, e, a) {
			$('#head').html(s.wdgt.head);
			$('#body').html(s.wdgt.body);
			$('#foot').html(s.wdgt.foot);
		}
	}
});

app.directive('btnEvent', function () {
	return {
		link: function (s, e, a) {
			var cnt = 0;
			var x = a.off || 'action';
			var y = a.on || 'caution';
			var t = x;

			e.addClass('button-' + t);

			function toggle() {
				e.removeClass('button-' + t);
				t = (t !== y) ? y : x;
				e.addClass('button-' + t);
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

app.directive('widgetOptions', function () {
	return {
		restrict: 'A',
		link:     function (s, e) {
			e.bind('click', function () {
				var $wcontent = $(e).parent().parent().parent().next('.widget-body');
				if ($wcontent.is(':visible')) {
					$('.widgetMinMax').children('i')
						.removeClass('fa fa-chevron-up')
						.addClass('fa fa-chevron-down');
				} else {
					$('.widgetMinMax').children('i')
						.removeClass('fa fa-chevron-down')
						.addClass('fa fa-chevron-up');
				}
				$wcontent.toggle(500);
			});
		}
	}
});

/*
 app.directive('widgetOptions', function () {
 return {
 restrict: 'A',
 link:     function (s, e) {
 e.bind('click', function () {
 var $wcontent = $(this).parent().parent().parent().next('.widget-body');
 if ($wcontent.is(':visible')) {
 $(this).children('i').removeClass('fa fa-chevron-up');
 $(this).children('i').addClass('fa fa-chevron-down');
 }
 else {
 $(this).children('i').removeClass('fa fa-chevron-down');
 $(this).children('i').addClass('fa fa-chevron-up');
 }
 $wcontent.toggle(500);
 });
 }
 }
 });
 */
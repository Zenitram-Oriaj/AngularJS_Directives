/**
 * Created by Jairo Martinez on 10/20/14.
 */

app.controller('Demo1Ctrl', function ($scope) {
	$scope.name = 'Jairo Martinez';
	$scope.msg = '2B or Not 2B, Which Floor?';
});

app.directive('hello', function () {
	return {
		restrict: 'E',
		template: '<h1>Hello <em>{{name}}</em></h1>',
		link:     function (s, e, a) {
			if (a.name) {
				s.name = a.name;
			}
		}
	}
});

app.directive('helloAttribute', function () {
	return {
		restrict: 'E',
		scope:    {
			name:    "@",
			message: "@msg"
		},
		template: '<h1>Hello <em>{{name}}</em>, {{message}}</h1>'
	}
});

app.directive('helloExtended', function () {
	return {
		restrict: 'E',
		scope:    true,
		template: '<h1>Hello <em>{{name}}</em>, How Are You Today?</h1>' +
		          '<br/>' +
		          '<button id="b1" class = "button button-border button-rounded">No Complaints</button>' +
							'<button id="b2" class = "button button-border button-rounded">Could Be Better</button>',
		link:     function (s, e, a) {
			if (a.name) {
				s.name = a.name;
			}
			console.log(e);
			var btn1 = e.find('#b1');

			btn1.bind('click', function(){
				btn1.html('Good To Know');
			});

			e.find('#b2').bind('click', function () {
				alert('Why Would You Click Me?');
			});

			e.on('$destroy', function(){
				alert('Don\'t leave me hanging');
			});
		}
	}
});
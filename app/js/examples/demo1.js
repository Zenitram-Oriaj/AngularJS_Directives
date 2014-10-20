/**
 * Created by Jairo Martinez on 10/20/14.
 */

app.controller('Demo1Ctrl', function ($scope) {
	$scope.name = 'Jairo Martinez';
	$scope.dfltName = 'Doctor Who';
});

app.directive('hello', function () {
	return {
		restrict: 'E',
		template: '<h1>Hello <em>{{name}}</em></h1>',
		link:     function (s, e, a) {
			if(a.name){
				s.name = a.name;
			}
		}
	}
});

app.directive('helloAttribute', function () {
	return {
		restrict: 'E',
		scope: {
			name:"@",
			message:"@"
		},
		template: '<h1>Hello <em>{{name}}</em>, {{message}}</h1>'
	}
});

app.directive('helloExtended', function () {
	return {
		restrict: 'E',
		scope:true,
		template: '<h1>Hello <em>{{name}}</em>, How Are You Today?</h1>' +
		          '<br/>' +
		          '<button class = "button button-border button-rounded">No Complaints</button>' +
							'<button class = "button button-border button-rounded">Could Be Better</button>',
		link:     function (s, e, a) {
			s.name = a.name;
		}
	}
});
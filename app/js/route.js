/**
 * Created by Jairo Martinez on 9/13/14.
 */

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/demo1', {
			templateUrl: './partials/demo1.html',
			controller:  'D1Controller'
		})
		.when('/demo2', {
			templateUrl: './partials/demo2.html',
			controller:  'D2Controller'
		})
		.when('/demo3', {
			templateUrl: './partials/demo3.html',
			controller:  'D2Controller'
		})
		.otherwise({
			redirectTo: '/demo3'
		});
}]);
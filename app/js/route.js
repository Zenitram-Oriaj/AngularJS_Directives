/**
 * Created by Jairo Martinez on 9/13/14.
 */

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/demo1', {
			templateUrl: './partials/demo1.html',
			controller:  'Demo1Ctrl'
		})
		.when('/demo2', {
			templateUrl: './partials/demo2.html',
			controller:  'Demo2Ctrl'
		})
		.when('/demo3', {
			templateUrl: './partials/demo3.html',
			controller:  'Demo3Ctrl'
		})
		.otherwise({
			redirectTo: '/demo1'
		});
}]);
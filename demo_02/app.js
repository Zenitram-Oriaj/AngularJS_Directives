// ********  APPLICATION  ******** \\
var app = angular.module("app", []);



// ********  DIRECTIVES  ******** \\

app.directive("enter", function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.addClass(attrs.enter);
		})
	}
});

app.directive("leave", function() {
	return function(scope, element, attrs) {
		element.bind("mouseleave", function() {
			element.removeClass(attrs.enter);
		})
	}
});


// ********  CONTROLLERS  ******** \\





// ********   SERVICES    ******** \\


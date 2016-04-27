'use strict';

var app = angular.module('myApp', [
	'ngRoute'
]);

var page1 = 'hjem';
var page2 = 'lectures-student';
var page3 = 'main-student';
var page4 = 'om-oss';
var page5 = 'kontakt';

$('#page-1-link a').text(page1);
$('#page-2-link a').text(page2);
$('#page-3-link a').text(page3);
$('#page-4-link a').text(page4);
$('#page-5-link a').text(page5);

$("#page-1-link a").attr("href", '#' + page1);
$("#page-2-link a").attr("href", '#' + page2);
$("#page-3-link a").attr("href", '#' + page3);
$("#page-4-link a").attr("href", '#' + page4);
$("#page-5-link a").attr("href", '#' + page5);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/' + page1,{
	templateUrl: 'partials/default.html'
	})
	.when('/' + page2,{
	templateUrl: 'partials/lectures-student.html'
	})
	.when('/' + page3,{
	templateUrl: 'partials/main-student.html'
	})
	.when('/' + page4,{
	templateUrl: 'partials/om-oss.html'
	})
	.when('/' + page5,{
	templateUrl: 'partials/kontakt.html'
	})
	.otherwise({
	templateUrl: 'partials/default.html'
	});
}]);

'use strict';

var app = angular.module('myApp', [
	'ngRoute'
]);

var page1 = 'hjem';
var page2 = 'lectures-student';
var page3 = 'galleri';
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
/*
$('page-one-desktop__link').textContent 	= pageOne;
$('page-two-desktop__link').textContent 	= pageTwo;
$('page-three-desktop__link').textContent = pageThree;
$('page-four-desktop__link').textContent 	= pageFour;
$('page-five-desktop__link').textContent 	= pageFive;

$("page-one-desktop__link").setAttribute("href", '#' + pageOne);
$("page-two-desktop__link").setAttribute("href", '#' + pageTwo);
$("page-three-desktop__link").setAttribute("href", '#' + pageThree);
$("page-four-desktop__link").setAttribute("href", '#' + pageFour);
$("page-five-desktop__link").setAttribute("href", '#' + pageFive);
*/
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/' + page1,{
	templateUrl: 'partials/default.html'
	})
	.when('/' + page2,{
	templateUrl: 'partials/lectures-student.html'
	})
	.when('/' + page3,{
	templateUrl: 'partials/galleri.html'
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

'use strict';

var app = angular.module('myApp', [
	'ngRoute'
]);

var page1 = 'hjem';
var page2 = 'lectures-student';
var page3 = 'main-student';
var page4 = 'subjects';
var page5 = 'main-teacher';
var page6 = 'main-admin'
var page7 = 'play'
var page8 = 'profile-student'
var page9 = 'your-lectures'
var page10 = 'profile-teacher'
var page11 = 'profile-admin'
var page12 = 'notmy-profile-student'
var page13 = 'notmy-profile-teacher'
var page14 = 'notmy-profile-admin'
var page15 = 'faq'
var page16 = 'about'
var page17 = 'testpage'
var page18 = 'upload'

$('.page-1-link a').text(page1.replace('-', ' '));
$('.page-2-link a').text(page2.replace('-', ' '));
$('.page-3-link a').text(page3.replace('-', ' '));
$('.page-4-link a').text(page4.replace('-', ' '));
$('.page-5-link a').text(page5.replace('-', ' '));
$('.page-6-link a').text(page6.replace('-', ' '));
$('.page-9-link a').text(page9.replace('-', ' '));

$(".page-1-link a").attr("href", '#' + page1);
$(".page-2-link a").attr("href", '#' + page2);
$(".page-3-link a").attr("href", '#' + page3);
$(".page-4-link a").attr("href", '#' + page4);
$(".page-5-link a").attr("href", '#' + page5);
$(".page-6-link a").attr("href", '#' + page6);
$(".page-9-link a").attr("href", '#' + page9);

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
	templateUrl: 'partials/subjects.html'
	})
	.when('/' + page5,{
	templateUrl: 'partials/main-teacher.html'
	})
	.when('/' + page6,{
	templateUrl: 'partials/main-admin.html'
	})
	.when('/' + page7,{
	templateUrl: 'partials/play.html'
	})
	.when('/' + page8,{
	templateUrl: 'partials/profile-student.html'
	})
	.when('/' + page9,{
	templateUrl: 'partials/lectures-teacher.html'
	})
	.when('/' + page10,{
	templateUrl: 'partials/profile-teacher.html'
	})
	.when('/' + page11,{
	templateUrl: 'partials/profile-admin.html'
	})
	.when('/' + page12,{
	templateUrl: 'partials/notmy-profile-student.html'
	})
	.when('/' + page13,{
	templateUrl: 'partials/notmy-profile-teacher.html'
	})
	.when('/' + page14,{
	templateUrl: 'partials/notmy-profile-admin.html'
	})
	.when('/' + page15,{
	templateUrl: 'partials/faq.html'
	})
	.when('/' + page16,{
	templateUrl: 'partials/about.html'
	})
	.when('/' + page17,{
	templateUrl: 'partials/testpage.html'
	})
	.when('/' + page18,{
	templateUrl: 'partials/upload.html'
	})
	.otherwise({
	templateUrl: 'partials/default.html'
	});
}]);

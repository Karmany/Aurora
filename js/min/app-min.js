"use strict";var app=angular.module("myApp",["ngRoute"]),page1="error",page2="lectures-student",page3="main-student",page4="subjects",page5="main-teacher",page6="main-admin",page7="play",page8="profile-student",page9="lectures-teacher",page10="profile-teacher",page11="profile-admin",page12="notmy-profile-student",page13="notmy-profile-teacher",page14="notmy-profile-admin",page15="faq",page16="about",page17="testpage",page18="upload",page19="home-unregistered";$(".page-1-link a").text(page19.replace(page19,"home")),$(".page-2-link a").text(page2.replace(page2,"your lectures")),$(".page-3-link a").text(page3.replace(page3,"home")),$(".page-4-link a").text(page4.replace("-"," ")),$(".page-5-link a").text(page5.replace(page5,"home")),$(".page-6-link a").text(page6.replace(page6,"home")),$(".page-9-link a").text(page9.replace(page9,"your lectures")),$(".page-10-link a").text(page9.replace(page9,"your lectures")),$(".page-10-link a").text(page8.replace(page8,"profile")),$(".page-11-link a").text(page10.replace(page10,"profile")),$(".page-12-link a").text(page11.replace(page11,"profile")),$(".page-1-link a").attr("href","#"+page19),$(".page-2-link a").attr("href","#"+page2),$(".page-3-link a").attr("href","#"+page3),$(".page-4-link a").attr("href","#"+page4),$(".page-5-link a").attr("href","#"+page5),$(".page-6-link a").attr("href","#"+page6),$(".page-9-link a").attr("href","#"+page9),$(".page-10-link a").attr("href","#"+page8),$(".page-11-link a").attr("href","#"+page10),$(".page-12-link a").attr("href","#"+page11),app.config(["$routeProvider",function(e){e.when("/"+page1,{templateUrl:"partials/default.html"}).when("/"+page2,{templateUrl:"partials/lectures-student.html"}).when("/"+page3,{templateUrl:"partials/main-student.html"}).when("/"+page4,{templateUrl:"partials/subjects.html"}).when("/"+page5,{templateUrl:"partials/main-teacher.html"}).when("/"+page6,{templateUrl:"partials/main-admin.html"}).when("/"+page7,{templateUrl:"partials/play.html"}).when("/"+page8,{templateUrl:"partials/profile-student.html"}).when("/"+page9,{templateUrl:"partials/lectures-teacher.html"}).when("/"+page10,{templateUrl:"partials/profile-teacher.html"}).when("/"+page11,{templateUrl:"partials/profile-admin.html"}).when("/"+page12,{templateUrl:"partials/notmy-profile-student.html"}).when("/"+page13,{templateUrl:"partials/notmy-profile-teacher.html"}).when("/"+page14,{templateUrl:"partials/notmy-profile-admin.html"}).when("/"+page15,{templateUrl:"partials/faq.html"}).when("/"+page16,{templateUrl:"partials/about.html"}).when("/"+page17,{templateUrl:"partials/testpage.html"}).when("/"+page18,{templateUrl:"partials/upload.html"}).when("/"+page19,{templateUrl:"partials/home-unregistered.html"}).otherwise({templateUrl:"partials/default.html"})}]);
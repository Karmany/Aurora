// !SESSIONSTORAGE for storing session roles!

$(function() {
	if(sessionStorage.role == undefined){
		sessionStorage.role = 'unregistered';
		window.location.href = 'logintest.html';
	}
});

$('button').on('click', function(){

  if($('.username').val() == 'student'){
	  window.location.href = 'index.html#/' + page3;
	  sessionStorage.role = 'student';

  }else if ($('.username').val() == 'teacher'){
	  window.location.href = 'index.html#/' + page5;
	  sessionStorage.role = 'teacher';

  }else if ($('.username').val() == 'admin') {
	  window.location.href = 'index.html#/' + page6;
	  sessionStorage.role = 'admin';
  }

});

$('.logout').on('click', function() {
	sessionStorage.removeItem('role');
});

$('.unregistered').on('click', function() {
  sessionStorage.role = 'unregistered';
});

$(window).on('hashchange load', function(e){
  $(function(){

	  if (sessionStorage.role == 'student') {
		  hideNavItems();
		  // student header nav links
		  $('.page-1-link,  .page-2-link, .page-3-link, .page-4-link, .search, .logout').show();

	  }else if (sessionStorage.role == 'teacher') {
		  hideNavItems();
		  // teacher header nav links
		  $('.page-1-link, .page-4-link, .page-4-link, .search, .logout').show();

	  }else if (sessionStorage.role == 'admin') {
		  hideNavItems();
		  // admin header nav links
		  $('.page-1-link,  .page-2-link, .page-4-link, .search, .logout').show();

	  }else if (sessionStorage.role == 'unregistered') {
		  hideNavItems();
		  // unregistered header nav links
		  $('.page-1-link, .page-4-link, .search, .logout').show();
		  $('.logout a').text('sign in')
	  }

  });
});

function hideNavItems(){
  $('nav ul li, .nav-desktop-indicator ul li, .slideout ul li').hide();
}

// See role while working
$('#role').text(sessionStorage.role)

// END - SESSIONSTORAGE

// START - SEARCHBOX

$(function(){
	$('li.search, .search-icon').click(function(){
		if($('.searchbox').hasClass('searchbox') || $('.searchbox').hasClass('closed')){
			$('.searchbox').addClass("open").removeClass("closed");
			$('.searchbox input').focus();
			//$('li.search .search-icon').hide();
			//$('li.search .close-icon').show();
			//$('li.search a').html('close');
			removeActiveClass();
			$('.nav-desktop-indicator .search').addClass('active');
		}else{
			$('.searchbox input').blur();
			//$('.searchbox').addClass('closed').removeClass('open');
			//$('li.search .search-icon').show();
			//$('li.search .close-icon').hide();
			//$('li.search a').html('search');
		}
	});
});
/*
$('li.search').on('click', function(){
	$('#searchbox').removeClass('force-closed')
	$('#searchbox').toggleClass('closed open')
	if($('#searchbox').hasClass('open')){
		$('#searchbox input').focus();
	}else if($('#searchbox').hasClass('closed')){
		$('#searchbox input').blur();
	}
});
*/
/*
$('.searchbox input').on('focus', function(){
	$('li.search .search-icon').hide();
	$('li.search .close-icon').show();
	removeActiveClass();
	$('.nav-desktop-indicator .search').addClass('active');
});
*/
$('.searchbox input').on('blur', function(){
	$('.searchbox').addClass('closed').removeClass('open');
	setActiveMenuItem();
});

// END - SEARCHBOX

// START - HAMBURGER

$(function(){
	$('.hamburger').click(function(){
		if($('.hamburger').hasClass('hamburger') || $('.hamburger').hasClass('active-out')){
			$('.slideout-wrap').addClass("active").removeClass("active-out");
		}else{
			$('.slideout-wrap').addClass("active-out").removeClass("active");
		}
	});
});

$(".slideout ul li a, .body-overlay").click(function(){
	$(".slideout-wrap").addClass("active-out").removeClass("active");
});

// END - HAMBURGER

// fetch subpage from Url and display as title and in header and tab

var pageBaseTitle = "Aurora";
var pageDivider = "#/";
var ttl = document.getElementById("title");

function getUrl(){
	var url = window.location.href.split(pageDivider)[1];
	if(url !== undefined){
		url.replace('-', ' ')
	}
	return (typeof url == 'undefined' ? page1 : url);
}
String.prototype.ucFirst = function(){
	 return this.charAt(0).toUpperCase() + this.slice(1);
}
function urlTitle() {
	document.title = pageBaseTitle + " - " + getUrl().ucFirst();
	ttl.textContent = getUrl()//.ucFirst();
}

$(function(){
	urlTitle();
	setActiveMenuItem();
});

window.addEventListener("hashchange", function(){
	urlTitle();
	setActiveMenuItem();
});

// See which subpage is currently active in the navigation

function setActiveMenuItem(){
	switch (url = window.location.href.split(pageDivider)[1]) {
		case page1:
			removeActiveClass();
			//document.getElementById('page-one-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-1-link').addClass('active');
			break;
		case page2:
			removeActiveClass();
			//document.getElementById('page-two-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-2-link').addClass('active');
			break;
		case page3:
			removeActiveClass();
			//document.getElementById('page-three-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-3-link').addClass('active');
			break;
		case page4:
			removeActiveClass();
			//document.getElementById('page-four-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-4-link').addClass('active');
			break;
		case page5:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-5-link').addClass('active');
			break;
      case page6:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('.nav-desktop-indicator .page-6-link').addClass('active');
			break;
	};
}

function removeActiveClass(){
	$('.nav-desktop-indicator .page-1-link').removeClass('active');
	$('.nav-desktop-indicator .page-2-link').removeClass('active');
	$('.nav-desktop-indicator .page-3-link').removeClass('active');
	$('.nav-desktop-indicator .page-4-link').removeClass('active');
	$('.nav-desktop-indicator .page-5-link').removeClass('active');
   $('.nav-desktop-indicator .page-6-link').removeClass('active');
	$('.nav-desktop-indicator .search').removeClass('active');
};

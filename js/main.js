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
  $('nav ul li, .nav-desktop-indicator ul li').hide();
}

// See role while working
$('#role').text(sessionStorage.role)

// END - SESSIONSTORAGE

$('li.search').on('click', function(){
	$('#searchbox').toggleClass('active');
	if($('#searchbox').hasClass('active')){
		$('#searchbox input').focus();
		$('li.search .search-icon').hide();
		$('li.search .close-icon').show();
		removeActiveClass();
		$('.nav-desktop-indicator .search').addClass('active');
	}else{
		$('#searchbox input').blur();
		$('li.search .search-icon').show();
		$('li.search .close-icon').hide();
		setActiveMenuItem();
	}
});

$('#searchbox input').on('blur', function() {
   $('#searchbox').removeClass('active');
});


// Profile JS


/*
$(document).ready(function(){
$('.read-more').click(function(){
   readMore();
});
});

function readMore() {
   $('.full-txt').toggle();
   $('.read-more').toggle();
}

$(document).ready(function(){
   $('.read-less').click(function(){
      $('.full-txt').toggle();
      $('.read-more').toggle();
   });
});
*/


/*
function changePos() {
   var navDesktop = $(".profile-wrapper");
   if (window.pageYOffset > parseInt($('#header').css('height'))) {
      $(navDesktop).css("position","fixed");
      $(navDesktop).css("top","0px");
      //$(navDesktop).css("width","inherit");
      console.log('if state');
   }
   else {
      $(navDesktop).css("position","relative");
      $(navDesktop).css("top","0px");
      //$(navDesktop).css("width","100%");
      console.log('else state');
   }


//else if ($(".profile-wrapper").offset().top + $(".profile-wrapper").height() >= $('footer').offset().top - 10)
   //  $(navDesktop).css("position", "absolute");
}

$(window).scroll(function(){
   changePos();
});
/*
//if ($(".profile-wrapper").offset().top + $(".profile-wrapper").height() >= $('#footer').offset().top - 10){
  //  $(navDesktop).css("position", "absolute");
    //console.log("else if state")
//}

// Footer shit
/*
$(function(){
	$('.page-wrap').css({
		'margin-bottom' : '-' + parseInt($('footer').css('height')) + 'px',
	});
	$('.page-wrap:after').css({
		'height' : parseInt($('footer').css('height')) + 'px',
	});
});
*/

// fetch subpage from Url and display as title and in header and tab

var pageBaseTitle = "Aurora";
var pageDivider = "#/";
var ttl = $("#title");

function getUrl(){
	var url = window.location.href.split(pageDivider)[1];
	return (typeof url == 'undefined' ? page1 : url);
}
String.prototype.ucFirst = function(){
	 return this.charAt(0).toUpperCase() + this.slice(1);
}
function urlTitle() {
	document.title = pageBaseTitle + " - " + getUrl().ucFirst();
	ttl.textContent = getUrl()//.ucFirst();
}

urlTitle();
setActiveMenuItem();

window.addEventListener("hashchange", function(){
	urlTitle();
	setActiveMenuItem();
});

// See which subpage is currently active in the navigation

function setActiveMenuItem() {
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
	}
}

function removeActiveClass() {
	$('.nav-desktop-indicator .page-1-link').removeClass('active');
	$('.nav-desktop-indicator .page-2-link').removeClass('active');
	$('.nav-desktop-indicator .page-3-link').removeClass('active');
	$('.nav-desktop-indicator .page-4-link').removeClass('active');
	$('.nav-desktop-indicator .page-5-link').removeClass('active');
   $('.nav-desktop-indicator .page-6-link').removeClass('active');
	$('.nav-desktop-indicator .search').removeClass('active');
}






/*
$(window).scroll(function(e){
 var $el = $('.profile-wrapper');
 var isPositionFixed = ($el.css('position') == 'fixed');
 if ($(this).scrollTop() > 300 && !isPositionFixed){
    $('.profile-wrapper').css({'position': 'fixed', 'top': '0px'});
 }
 if ($(this).scrollTop() < 300 && isPositionFixed){
    $('.profile-wrapper').css({'position': 'static', 'top': '0px'});
 }
});
*/



//Dette er en kode jeg bare sparer på, skal kansje bruke den mer. -Aslak
/*
// Position of fixed element from top of the document
var fixedElementOffset = $('.profile-wrapper').offset().top;
// Position of footer element from top of the document.
// You can add extra distance from the bottom if needed,
// must match with the bottom property in CSS
var footerOffset = $('#footer').offset().top - 36;

var fixedElementHeight = $('.profile-wrapper').height();

// Check every time the user scrolls
$(window).scroll(function (event) {

    // Y position of the vertical scrollbar
    var y = $(this).scrollTop();

    if ( y >= fixedElementOffset && ( y + fixedElementHeight ) < footerOffset ) {
         $('.profile-wrapper').addClass('fixed');
         $('.profile-wrapper').removeClass('bottom');
         console.log("if")
    }
    else if ( y >= fixedElementOffset && ( y + fixedElementHeight ) >= footerOffset ) {
         $('.profile-wrapper').removeClass('fixed');
         $('.profile-wrapper').addClass('bottom');
         console.log("else if")
    }
    else {
         $('.profile-wrapper').removeClass('fixed bottom');
         console.log("else")
    }

 });
 */

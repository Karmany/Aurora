// !SESSIONSTORAGE for storing session roles!

$(function() {
	if(sessionStorage.role == undefined){
		sessionStorage.role = 'unregistered';
		window.location.href = 'login.html';
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

		  // Subjects coding
		  $('.sub-wrap').hide();
	  }

  });
});

function hideNavItems(){
  $('nav ul li, .nav-desktop-indicator ul li, .slideout ul li').hide();
}

// See role while working
$('#role').text(sessionStorage.role)

// END - SESSIONSTORAGE

// ____________________________________

// START - SEARCHBOX
	$('.search-press, .search-press-mobile').on('click', function(){
			$('.searchbox').addClass('open');
			$('li.search').addClass('activeColor');
			$('nav.mobile .nav-items').addClass('search-active');
			$('.blur-trigger, .blur-trigger-mobile').show();
			$('.search-icon').hide();
			$('.close-icon').show();
			$('.searchbox input').focus();
	});

$('.searchbox input').on('blur', function(){
	$('.searchbox').removeClass('open');
	$('li.search').removeClass('activeColor');
	$('nav.mobile .nav-items').removeClass('search-active');
	$('.search-icon').show();
	$('.close-icon').hide();
	$('.blur-trigger, .blur-trigger-mobile').hide();
});
/*
$('.searchbox input').on('blur', function(){
	$('.searchbox').addClass('closed').removeClass('open');
});
*/
// END - SEARCHBOX

// ____________________________________

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

// ____________________________________

// LIKE - DISLIKE

$(function(){
	$('.controllers .icons .like').on('click', function(){
		$('.dislike').removeClass('checked');
		$('.like').addClass('checked');
	});
});

$(function(){
	$('.controllers .icons .dislike').on('click', function(){
		$('.like').removeClass('checked');
		$('.dislike').addClass('checked');
	});
});

// END LIKE - DISLIKE

// ____________________________________

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
		default:
			removeActiveClass();
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

// ____________________________________

// START | PLAY VIDEO - ETC

$(function(){

	if(url = window.location.href.split(pageDivider)[1] == page7){
		console.log('plaeh!!')
	};

	$('.tabs').click(function(e){

		if(e.target.id == 'slide-button' ){

			if($('#slides').css('display') == 'none'){
				$('#wiki').hide();
				$('#slides').fadeIn(300);
				wikiHeight();
				slideHeight();
				$('.tabs').removeClass('active');
				$('#slide-button').addClass('active');
				$('#wiki-button').removeClass('active');
			}

		} else if (e.target.id == 'wiki-button' ) {

			if($('#wiki').css('display') == 'none'){
				$('#wiki').fadeIn(300);
				$('#slides').hide();
				wikiHeight();
				slideHeight();
				$('.tabs').addClass('active');
				$('#slide-button').removeClass('active');
				$('#wiki-button').addClass('active');
			}

		}
	});

})

$(window).resize(function(){
	wikiHeight();
	slideHeight();
});

function wikiHeight(){
	$('#wiki').css({
		'height' : parseInt($('#lectureVideo').css('height')) - parseInt($('.tabs').css('height')) + 'px',
	})
}

function slideHeight(){
	$('#slides').css({
		'height' : parseInt($('#lectureVideo').css('height')) - parseInt($('.tabs').css('height')) - 20 + 'px',
		'marginBottom' :  20 + 'px',
	})
}

// END | PLAY VIDEO - ETC

// ____________________________________

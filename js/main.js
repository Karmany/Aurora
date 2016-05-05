

/*
// nav/ham
var ham = document.getElementById("hamburger");
var ttl = document.getElementById("title");
// url globals
var pageBaseTitle = "Glimt";
var pageDivider = "#/";

// Display sidebar. / Hamburger

$(function(){
	$("#hamburger").click(function(){
		if($(ham).hasClass("hamburger") || $(ham).hasClass("active-out")){
			$("#hamburger, #screen-overlay, #nav-list-mobile, #blur, #title").addClass("active").removeClass("active-out");
		}
		else {
			$("#hamburger, #screen-overlay, #nav-list-mobile, #blur, #title").addClass("active-out").removeClass("active");
		}
	});

	$("#nav-list-mobile li a").click(function(){
		$("#hamburger, #screen-overlay, #nav-list-mobile, #blur, #title").addClass("active-out").removeClass("active");
	});
});
*/
/*
//window.onscroll = changePos;

window.addEventListener("onscroll", changePos);

function changePos() {

    var navDesktop = document.getElementById("desktop-nav-container");
	 return navDesktop;
	 //var navDesktop = $("#desktop-nav-container");
    if (window.pageYOffset > 140) {
        navDesktop.style.position = "fixed";
		  //$("#desktop-nav-container").css( "position", "fixed" );
        navDesktop.style.top = "0";
		  navDesktop.setAttribute("class", 'scrolling');
    } else {
        navDesktop.style.position = "";
        navDesktop.style.top = "";
		  navDesktop.setAttribute("class", 'static');
    }
}
*/

// Make desktop navbar fixed after scroll value exceeds the header offsetHeight
/*
window.onscroll = changePos;
window.onscroll = navMobileScroll;

function changePos() {
    var navDesktop = document.getElementById("desktop-nav-container");
    if (window.pageYOffset > parseInt(document.getElementById('header').offsetHeight)) {
        navDesktop.style.position = "fixed";
        navDesktop.style.top = "0";
		  navDesktop.setAttribute("class", "scrolling");
		  document.getElementById("container").style.marginTop = parseInt(navDesktop.offsetHeight) + 'px';
    } else {
        navDesktop.style.position = "";
        navDesktop.style.top = "";
		  navDesktop.removeAttribute("class");
		  document.getElementById("container").style.marginTop = 0;
    }
}

// add .scrolling class to mobile-nav to add aditional styles

function navMobileScroll() {
    var navMobile = document.getElementById("mobile-nav");
    if (window.pageYOffset > 0) {
		 navMobile.setAttribute("class", "scrolling");
    } else {
		 navMobile.removeAttribute("class");
    }
}

// Make margin-top of header equal to height of .mobile-nav (stop overlapping because mobile nav is fixed)

window.onresize = headerMargin;
headerMargin();

function headerMargin() {
	var mobileNavHeight = parseInt(document.getElementById('mobile-nav').offsetHeight);
	document.getElementById('header').style.marginTop = mobileNavHeight + 'px';
	document.getElementById('mobile-nav').style.marginTop = -mobileNavHeight + 'px';
};

// Negative margin of #nav-list-mobile equal to height of mobile-nav
var mobileNavHeight = parseInt(document.getElementById('mobile-nav').offsetHeight);
document.getElementById('screen-overlay').style.marginTop = -mobileNavHeight + 'px';

// fetch subpage from Url and display as title and in header and tab

function getUrl(){
	var url = window.location.href.split(pageDivider)[1];
	return (typeof url == 'undefined' ? pageOne : url);
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
		case pageOne:
			removeActiveClass();
			document.getElementById('page-one-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			document.getElementById('page-one-desktop').setAttribute('class', 'nav-list-desktop__item nav-list-desktop__item--active');
			break;
		case pageTwo:
			removeActiveClass();
			document.getElementById('page-two-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			document.getElementById('page-two-desktop').setAttribute('class', 'nav-list-desktop__item nav-list-desktop__item--active');
			break;
		case pageThree:
			removeActiveClass();
			document.getElementById('page-three-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			document.getElementById('page-three-desktop').setAttribute('class', 'nav-list-desktop__item nav-list-desktop__item--active');
			break;
		case pageFour:
			removeActiveClass();
			document.getElementById('page-four-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			document.getElementById('page-four-desktop').setAttribute('class', 'nav-list-desktop__item nav-list-desktop__item--active');
			break;
		case pageFive:
			removeActiveClass();
			document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			document.getElementById('page-five-desktop').setAttribute('class', 'nav-list-desktop__item nav-list-desktop__item--active');
			break;
	}
}

function removeActiveClass() {
	document.getElementById('page-one-mobile').setAttribute('class', 'nav-list__item');
	document.getElementById('page-two-mobile').setAttribute('class', 'nav-list__item');
	document.getElementById('page-three-mobile').setAttribute('class', 'nav-list__item');
	document.getElementById('page-four-mobile').setAttribute('class', 'nav-list__item');
	document.getElementById('page-five-mobile').setAttribute('class', 'nav-list__item');

	document.getElementById('page-one-desktop').setAttribute('class', 'nav-list-desktop__item');
	document.getElementById('page-two-desktop').setAttribute('class', 'nav-list-desktop__item');
	document.getElementById('page-three-desktop').setAttribute('class', 'nav-list-desktop__item');
	document.getElementById('page-four-desktop').setAttribute('class', 'nav-list-desktop__item');
	document.getElementById('page-five-desktop').setAttribute('class', 'nav-list-desktop__item');
}
*/


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

}

$(window).scroll(function(){
   changePos();
});
*/
//if ($(".profile-wrapper").offset().top + $(".profile-wrapper").height() >= $('#footer').offset().top - 10){
  //  $(navDesktop).css("position", "absolute");
    //console.log("else if state")
//}


// fetch subpage from Url and display as title and in header and tab

var pageBaseTitle = "Aurora";
var pageDivider = "#/";
var ttl = $("#title");

function getUrl(){
	var url = window.location.href.split(pageDivider)[1];
	return (typeof url == 'undefined' ? pageOne : url);
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
			$('nav-desktop-indicator #page1-link').addClass('active');
			break;
		case page2:
			removeActiveClass();
			//document.getElementById('page-two-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('nav-desktop-indicator #page-2-link').addClass('active');
			break;
		case page3:
			removeActiveClass();
			//document.getElementById('page-three-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('nav-desktop-indicator #page-3-link').addClass('active');
			break;
		case page4:
			removeActiveClass();
			//document.getElementById('page-four-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('nav-desktop-indicator #page-4-link').addClass('active');
			break;
		case page5:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('nav-desktop-indicator #page-5-link').addClass('active');
			break;
      case page6:
			removeActiveClass();
			//document.getElementById('page-five-mobile').setAttribute('class', 'nav-list-mobile__item nav-list-mobile__item--active');
			$('nav-desktop-indicator #page-6-link').addClass('active');
			break;
	}
}

function removeActiveClass() {
	$('nav-desktop-indicator #page-1-link').removeClass('active');
	$('nav-desktop-indicator #page-1-link').removeClass('active');
	$('nav-desktop-indicator #page-1-link').removeClass('active');
	$('nav-desktop-indicator #page-1-link').removeClass('active');
	$('nav-desktop-indicator #page-1-link').removeClass('active');
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

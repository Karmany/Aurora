
//This is the video we want to monitor
//var vid = document.getElementById('lectureVideo');

//How long the video is in seconds. Eg. "10.026667"
//var duration = document.getElementById('lectureVideo').duration;

//How far the video have played in seconds. Eg. "5.426438"
//var currentTime = document.getElementById('lectureVideo').currentTime;


var vid = document.getElementById('lectureVideo');
var timeStamp = 0;

vid.ontimeupdate = function() {getStarted()};

function getStarted() {
   pageTime();
   changeImg();
}

// This updates the timer on the page
function pageTime() {
    document.getElementById("demo").innerHTML = vid.currentTime;
    timeStamp = vid.currentTime;
    console.log("Page time is updated to " + vid.currentTime);
};

// This function change the slide based on how far the video have played
function changeImg() {
   if (vid.currentTime > 0  && vid.currentTime < 15 && document.getElementById('slides').src != slides[0]) {
      document.getElementById('slides').src = slides[0];
      console.log("Slide 1 loaded on page");
   } else if (vid.currentTime > 15 && vid.currentTime < 184 && document.getElementById('slides').src != slides[1]) {
      document.getElementById('slides').src = slides[1];
      console.log("Slide 2 loaded on page");
   } else if (vid.currentTime > 184 && vid.currentTime < 538 && document.getElementById('slides').src != slides[2]) {
      document.getElementById('slides').src = slides[2];
      console.log("Slide 3 loaded on page");
   } else if (vid.currentTime > 538 && vid.currentTime < 578 && document.getElementById('slides').src != slides[3]) {
      document.getElementById('slides').src = slides[3];
      console.log("Slide 4 loaded on page");
   } else if (vid.currentTime > 578 && vid.currentTime < 930 && document.getElementById('slides').src != slides[4]) {
      document.getElementById('slides').src = slides[4];
      console.log("Slide 5 loaded on page");
   } else if (vid.currentTime > 930 && vid.currentTime < 1193 && document.getElementById('slides').src != slides[5]) {
      document.getElementById('slides').src = slides[5];
      console.log("Slide 6 loaded on page");
   } else if (vid.currentTime > 1193 && vid.currentTime < 1295 && document.getElementById('slides').src != slides[6]) {
      document.getElementById('slides').src = slides[6];
      console.log("Slide 7 loaded on page");
   } else if (vid.currentTime > 1295 && vid.currentTime < 2080 && document.getElementById('slides').src != slides[7]) {
      document.getElementById('slides').src = slides[7];
      console.log("Slide 8 loaded on page");
   } else if (vid.currentTime > 2080 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[8]) {
      document.getElementById('slides').src = slides[8];
      console.log("Slide 9 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[9]) {
      document.getElementById('slides').src = slides[9];
      console.log("Slide 10 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[10]) {
      document.getElementById('slides').src = slides[10];
      console.log("Slide 11 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[11]) {
      document.getElementById('slides').src = slides[11];
      console.log("Slide 12 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[12]) {
      document.getElementById('slides').src = slides[12];
      console.log("Slide 13 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[13]) {
      document.getElementById('slides').src = slides[13];
      console.log("Slide 14 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2480 && document.getElementById('slides').src != slides[14]) {
      document.getElementById('slides').src = slides[14];
      console.log("Slide 15 loaded on page");
   } else if (vid.currentTime > 2480 && vid.currentTime < 2487 && document.getElementById('slides').src != slides[15]) {
      document.getElementById('slides').src = slides[15];
      console.log("Slide 16 loaded on page");
   }
};

//Keywords change videotime
var firstLink = document.getElementById('first')

firstLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 3;
   vid.play();
})









//Links to the different slides that we will put in the page
var slides = [
   "../img/slides/slide1.png",
   "../img/slides/slide2.png",
   "../img/slides/slide3.png",
   "../img/slides/slide4.png",
   "../img/slides/slide5.png",
   "../img/slides/slide6.png",
   "../img/slides/slide7.png",
   "../img/slides/slide8.png",
   "../img/slides/slide9.png",
   "../img/slides/slide10.png",
   "../img/slides/slide11.png",
   "../img/slides/slide12.png",
   "../img/slides/slide13.png",
   "../img/slides/slide14.png",
   "../img/slides/slide15.png",
   "../img/slides/slide16.png"
];

//When is the video we want to change slide
var breakpoints = [
   "0",
   "15",
   "184",
   "538",
   "578",
   "930",
   "1193",
   "1295",
   "2080",
   "2480",
   "2480",
   "2480",
   "2480",
   "2480",
   "2487";
];

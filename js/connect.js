
//This is the video we want to monitor
//var vid = document.getElementById('lectureVideo');

//How long the video is in seconds. Eg. "10.026667"
//var duration = document.getElementById('lectureVideo').duration;

//How far the video have played in seconds. Eg. "5.426438"
//var currentTime = document.getElementById('lectureVideo').currentTime;


var vid = document.getElementById('lectureVideo');
var timeStamp = 0;

vid.ontimeupdate = function() {getStarted();};

function getStarted() {
   pageTime();
   changeImg();
}

// This updates the timer on the page
function pageTime() {
    document.getElementById("demo").innerHTML = vid.currentTime;
    timeStamp = vid.currentTime;
    console.log("Page time is updated to " + vid.currentTime);
}

// This function change the slide based on how far the video have played
function changeImg() {
   if (vid.currentTime > 0  && vid.currentTime < 32 && document.getElementById('slides').src != slides[0]) {
      document.getElementById('slides').src = slides[0];
      console.log("Slide 1 loaded on page");
   } else if (vid.currentTime > 32 && vid.currentTime < 52 && document.getElementById('slides').src != slides[1]) {
      document.getElementById('slides').src = slides[1];
      console.log("Slide 2 loaded on page");
   } else if (vid.currentTime > 52 && vid.currentTime < 80 && document.getElementById('slides').src != slides[2]) {
      document.getElementById('slides').src = slides[2];
      console.log("Slide 3 loaded on page");
   } else if (vid.currentTime > 80 && vid.currentTime < 428 && document.getElementById('slides').src != slides[3]) {
      document.getElementById('slides').src = slides[3];
      console.log("Slide 4 loaded on page");
   } else if (vid.currentTime > 428 && vid.currentTime < 446 && document.getElementById('slides').src != slides[4]) {
      document.getElementById('slides').src = slides[4];
      console.log("Slide 5 loaded on page");
   } else if (vid.currentTime > 446 && vid.currentTime < 483 && document.getElementById('slides').src != slides[5]) {
      document.getElementById('slides').src = slides[5];
      console.log("Slide 6 loaded on page");
   } else if (vid.currentTime > 483 && vid.currentTime < 502 && document.getElementById('slides').src != slides[6]) {
      document.getElementById('slides').src = slides[6];
      console.log("Slide 7 loaded on page");
   } else if (vid.currentTime > 502 && vid.currentTime < 521 && document.getElementById('slides').src != slides[7]) {
      document.getElementById('slides').src = slides[7];
      console.log("Slide 8 loaded on page");
   } else if (vid.currentTime > 521 && vid.currentTime < 555 && document.getElementById('slides').src != slides[8]) {
      document.getElementById('slides').src = slides[8];
      console.log("Slide 9 loaded on page");
   } else if (vid.currentTime > 555 && vid.currentTime < 603 && document.getElementById('slides').src != slides[9]) {
      document.getElementById('slides').src = slides[9];
      console.log("Slide 10 loaded on page");
   }
}

//Keywords change videotime
var firstLink = document.getElementById('first');
firstLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 3;
   vid.play();
});
var secondLink = document.getElementById('second');
secondLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 483;
   vid.play();
});
var thirdLink = document.getElementById('third');
thirdLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 1610;
   vid.play();
});
var fourthLink = document.getElementById('fourth');
fourthLink.addEventListener('click', function (event) {
   event.preventDefault();
   vid.play();
   vid.pause();
   vid.currentTime = 3313;
   vid.play();
});









//Links to the different slides that we will put in the page
var slides = [
   "../img/slides/Lecture3-1.001.jpeg",
   "../img/slides/Lecture3-1.002.jpeg",
   "../img/slides/Lecture3-1.003.jpeg",
   "../img/slides/Lecture3-1.004.jpeg",
   "../img/slides/Lecture3-1.005.jpeg",
   "../img/slides/Lecture3-1.006.jpeg",
   "../img/slides/Lecture3-1.007.jpeg",
   "../img/slides/Lecture3-1.008.jpeg",
   "../img/slides/Lecture3-1.009.jpeg",
   "../img/slides/Lecture3-1.010.jpeg",
   "../img/slides/Lecture3-1.011.jpeg"
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
   "2487"
];

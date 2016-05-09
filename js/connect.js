
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
   if (vid.currentTime > 0  && vid.currentTime < 5 && document.getElementById('slides').src != slides[0]) {
      document.getElementById('slides').src = slides[0];
      console.log("Slide 1 loaded on page");
   } else if (vid.currentTime > 5 && vid.currentTime < 10 && document.getElementById('slides').src != slides[1]) {
      document.getElementById('slides').src = slides[1];
      console.log("Slide 2 loaded on page");
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
   "../img/slides/joker.jpg",
   "../img/slides/obama.jpg",
   "../img/slides/slide3.png",
   "../img/slides/slide4.png",
   "../img/slides/slide5.png",
   "../img/slides/slide6.png",
   "../img/slides/slide7.png"
];

//When is the video we want to change slide
var breakpoints = [
   "0",
   "10",
   "20",
   "30",
   "40",
   "50",
   "60"
];

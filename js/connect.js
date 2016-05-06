

//How long the video is in seconds. Eg. "10.026667"
var duration = document.getElementById('lectureVideo').duration;

//How far the video have played in seconds. Eg. "5.426438"
var currentTime = document.getElementById('lectureVideo').currentTime;

//Links to the different slides that we will put in the page
var slides = [
   "../img/slides/slide1.png",
   "../img/slides/slide2.png",
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

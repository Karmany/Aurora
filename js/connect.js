
//This is the video we want to monitor
//var vid = document.getElementById('lectureVideo');

//How long the video is in seconds. Eg. "10.026667"
//var duration = document.getElementById('lectureVideo').duration;

//How far the video have played in seconds. Eg. "5.426438"
//var currentTime = document.getElementById('lectureVideo').currentTime;


var vid = document.getElementById('lectureVideo');
var timeStamp = 0;

setInterval(function() {
   getStarted();
}, 5000);

//vid.ontimeupdate = function() {getStarted();};

function getStarted() {
   pageTime();
   changeImg();
}

// This updates the timer on the page
function pageTime() {
    document.getElementById("demo").innerHTML = vid.currentTime;
    timeStamp = vid.currentTime;
    //console.log("Page time is updated to " + vid.currentTime);
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

var numimg = 11;
var curimg = 0;

function goback() {
   var im=document.getElementById("slides");
   if(curimg>0) {
   im.src = slides[curimg-1];
   curimg = curimg - 1;
   console.log("Previous image will be loaded")
   vidTime();
   }
}

function gofwd(){
var im=document.getElementById("slides");
   if(curimg < numimg){
   im.src = slides[curimg+1];
   curimg = curimg + 1;
   vidTime();
   console.log("Next image will be loaded")
   }
}

function vidTime(){
var loadedImg = document.getElementById('slides').getAttribute("src")
   if (loadedImg = slides[0]) {
      vid.play();
      vid.pause();
      vid.currentTime = 0;
      vid.play();
      console.log("Image 1 is loaded, and the video will change to 0")
   } else if (loadedImg = slides[1]) {
      vid.play();
      vid.pause();
      vid.currentTime = 32;
      vid.play();
      console.log("Image 2 is loaded, and the video will change to 32")
   } else if (loadedImg = slides[2]) {
      vid.play();
      vid.pause();
      vid.currentTime = 52;
      vid.play();
      console.log("Image 3 is loaded, and the video will change to 52")
   } else if (loadedImg = slides[3]) {
      vid.play();
      vid.pause();
      vid.currentTime = 80;
      vid.play();
      console.log("Image 4 is loaded, and the video will change to 80")
   } else if (loadedImg = slides[4]) {
      vid.play();
      vid.pause();
      vid.currentTime = 428;
      vid.play();
      console.log("Image 5 is loaded, and the video will change to 428")
   } else if (loadedImg = slides[5]) {
      vid.play();
      vid.pause();
      vid.currentTime = 446;
      vid.play();
      console.log("Image 6 is loaded, and the video will change to 446")
   } else if (loadedImg = slides[6]) {
      vid.play();
      vid.pause();
      vid.currentTime = 483;
      vid.play();
      console.log("Image 7 is loaded, and the video will change to 483")
   } else if (loadedImg = slides[7]) {
      vid.play();
      vid.pause();
      vid.currentTime = 502;
      vid.play();
      console.log("Image 8 is loaded, and the video will change to 502")
   } else if (loadedImg = slides[8]) {
      vid.play();
      vid.pause();
      vid.currentTime = 521;
      vid.play();
      console.log("Image 9 is loaded, and the video will change to 521")
   } else if (loadedImg = slides[9]) {
      vid.play();
      vid.pause();
      vid.currentTime = 555;
      vid.play();
      console.log("Image 10 is loaded, and the video will change to 555")
   }
/*
   } else {
      vid.play();
      vid.pause();
      vid.currentTime = 0;
      vid.play();
   }
*/
}






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
   "../img/slides/Lecture3-1.010.jpeg"
];

//When is the video we want to change slide
var breakpoints = [
   "0",
   "32",
   "52",
   "80",
   "428",
   "446",
   "483",
   "502",
   "521",
   "555"
];

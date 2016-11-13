/********************************************************
https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/
Used for foundation/inspiration for the slideshow, but the implementation of
the arrow keys was created by Ada from the team. 
*********************************************************/
var slides = document.querySelectorAll('#slides .slide');
var prevSlide = 0;
var currentSlide = 0;
var currentDir = 1;


function nextSlide() {
  currentDir = 1;
  goToSlide(currentSlide+1);
}

function previousSlide() {
  currentDir = 0;
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  prevSlide = currentSlide;
  dots = document.getElementsByClassName('dot');


  currentSlide = n%slides.length;
  if (n>prevSlide) {
    // if on last slide
    slides[prevSlide].className = 'slide slideOutLeft';
    slides[currentSlide].className = 'slide showing fromRight';

  }else {
    slides[prevSlide].className = 'slide slideOutRight';
    slides[currentSlide].className = 'slide showing fromLeft';
  }
  // reseting dots
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  // setting new active dot
  dots[currentSlide].className += " active";

}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};

//MADE BY THE TEAM
document.addEventListener("keyup", function (event){
  var key = event.which || event.keyCode;
  if (key === 39){
    nextSlide();
    return;
  }
  else if (key === 37){
    previousSlide();
    return;
  }

});

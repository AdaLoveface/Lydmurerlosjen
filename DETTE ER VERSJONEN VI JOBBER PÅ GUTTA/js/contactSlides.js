/********************************************************
https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/
sed for foundation/inspiration for the slideshow, with modification from us
*********************************************************/
var contactSlides = document.querySelectorAll('#contactSlides .contactSlide');
var contactImg = document.getElementsByClassName('contactImg');
var prevContact = 0;
var currentContact = 0;

function goToContactSlide(n) {
  prevContact = currentContact;

  currentContact = (n)%contactSlides.length;
  if (n>prevContact) {
    // if on last slide
    contactSlides[prevContact].className = 'contactSlide slideOutLeft';
    contactSlides[currentContact].className = 'contactSlide contactShowing fromRight';

  }else {
    contactSlides[prevContact].className = 'contactSlide slideOutRight';
    contactSlides[currentContact].className = 'contactSlide contactShowing fromLeft';
  }

  for (var i = 0; i < contactImg.length; i++) {
    contactImg[i].className = "contactImg"
  }

  contactImg[currentContact].className = "contactImg activeContact";

}

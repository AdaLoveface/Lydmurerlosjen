
// object
var sections = [
  {
    "name": "LYDMURERLOSJEN",
    "id":   "home",
    "idSB": "homeSB",
    "position": 0
  },
  {
    "name": "ABOUT",
    "id":   "about",
    "idSB": "aboutSB"
  },
  {
    "name": "EVENTS",
    "id":   "events",
    "idSB": "eventsSB"
  },
  {
    "name": "PROJECTS",
    "id":   "projects",
    "idSB": "projectsSB"
  },
  {
    "name": "CONTACT",
    "id":   "contact",
    "idSB": "contactSB"
  },
  {
    "id":   "footer",
  }
]

// --------------------------------------------
// Updating positions of sections
// --------------------------------------------
// updating positions incase of resize
// home position will always be 0 so the loop starts at i=1
function updatePosition() {
  for (var i = 1; i < sections.length; i++) {
    sections[i].position = document.getElementById(sections[i].id).offsetTop;
  }
};

document.getElementById('body').addEventListener("resize",updatePosition());

// --------------------------------------------
// Making the anchor-scroll smooth
// --------------------------------------------

function scrollTo(toPos, animationTime) {

  reference = document.body;

  var difference = toPos - reference.scrollTop;
  var ticks = difference / animationTime * 2;

  setTimeout(function() {
    reference.scrollTop = reference.scrollTop + ticks;
    if (reference.scrollTop === toPos) return;
    scrollTo(toPos, animationTime - 2);
  }, 2);
}

// Adding eventlisteners to the anchor-links
// was planning to do this in a loop, but
// couldn't make it work
var animationTime = 300;
document.getElementById("homeSB").addEventListener('click',
function() {
  scrollTo(sections[0].position, animationTime);
});
document.getElementById("aboutSB").addEventListener('click',
function() {
  scrollTo(sections[1].position, animationTime);
});
document.getElementById("eventsSB").addEventListener('click',
function() {
  scrollTo(sections[2].position, animationTime);
});
document.getElementById("projectsSB").addEventListener('click',
function() {
  scrollTo(sections[3].position, animationTime);
});
document.getElementById("contactSB").addEventListener('click',
function() {
  scrollTo(sections[4].position, animationTime);
});
// --------------------------------------------
// Changing the header title on scroll
// --------------------------------------------

function changeHeader(){
  var title = document.getElementById('headerTitle');
  var pixelsScrolled = document.getElementById('body').scrollTop;

  console.log(pixelsScrolled)

  for (var i = 0; i < sections.length-1; i++) {
    if (pixelsScrolled < sections[i+1].position) {
      title.innerHTML = sections[i].name;
      return;
    }
  }
};

// --------------------------------------------
//
// --------------------------------------------

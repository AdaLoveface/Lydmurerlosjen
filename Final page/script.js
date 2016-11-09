
// object
var sections = [
  {
    "name": "LYDMURERLOSJEN",
    "color": "#252525",
    "id":   "home",
    "idSB": "homeSB",
    "position": 0
  },
  {
    "name": "ABOUT",
    "color": "rgb(60,148,139)",
    "id":   "about",
    "idSB": "aboutSB"
  },
  {
    "name": "EVENTS",
    "color": "rgb(70,175,105)",
    "id":   "events",
    "idSB": "eventsSB"
  },
  {
    "name": "PROJECTS",
    "color": "rgb(247,211,50)",
    "id":   "projects",
    "idSB": "projectsSB"
  },
  {
    "name": "CONTACT",
    "color": "#cc6349",
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
  var ticks = difference / animationTime * 10;

  setTimeout(function() {
    reference.scrollTop = reference.scrollTop + ticks;
    if (reference.scrollTop === toPos) return;
    scrollTo(toPos, animationTime - 10);
  }, 10);
}

// Adding eventlisteners to the anchor-links
// was planning to do this in a loop, but
// couldn't make it work
var animationTime = 400;
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
  //var title = document.getElementById('headerTitle');
  var pixelsScrolled = document.getElementById('body').scrollTop;

  console.log(pixelsScrolled);

  for (var i = 0; i < sections.length-1; i++) {
    if (pixelsScrolled < sections[i+1].position) {
      //title.innerHTML = sections[i].name;
      document.getElementById('headerBar').style.transition = "all 600ms ease-in-out";
      document.getElementById('headerBar').style.backgroundColor = sections[i].color;
      return;
    }
  }
};

// --------------------------------------------
//
// --------------------------------------------

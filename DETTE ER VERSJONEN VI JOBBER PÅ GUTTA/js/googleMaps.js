/********************************************************
Taken from Google
http://www.w3schools.com/graphics/google_maps_intro.asp
*********************************************************/
function myMap() {
  var myCenter = new google.maps.LatLng(63.434458, 10.404103);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: myCenter,
    zoom: 15}
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map);
}
src="https://maps.googleapis.com/maps/api/js?callback=myMap"

function initMap() {
  // The location of Uluru
  var kingston = {lat: 44.232, lng: -76.484};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('gMaps'), {zoom: 17, center: kingston});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: kingston, map: map});
}

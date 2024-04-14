function initMap() {
    var el = document.getElementById('map');
    var myLocation = new google.maps.LatLng(41.878113,-87.629799);
    var mapOptions = {
        zoom: 10,
        center: myLocation
    };
    var map = new google.maps.Map(el, mapOptions);
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map
    });
    var contentString = '<h1>Chicago</h1>';
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
      });
}
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50, lng: 30},
        zoom: 8
    });
}
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    height: 100%,
    center: { lat: 43.128333, lng: -79.229116  },
    mapTypeId: "terrain",
  });
  const flightPlanCoordinates = [
    { lat: 43.118919342285636, lng: -79.24559176045685 },
    { lat: 43.123869, lng: -79.243317 },
    { lat: 43.127565, lng: -79.238704 },
    { lat: 43.134447, lng: -79.238972 },
    { lat: 43.133664, lng: -79.232320 },
    { lat: 43.132098, lng: -79.227728 },
    { lat: 43.133245, lng: -79.224518},
    { lat: 43.13781773237814, lng: -79.22279112311823},
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;


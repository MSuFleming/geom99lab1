/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 * References: Google Maps Markers & Directions https://developers.google.com/maps/documentation/javascript/markers & W3School
 */
// [START maps_directions_complex]
function initMap() {
    var markerArray = [];
    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService();
    // Create a map and center it on Manhattan.
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 43.136668, lng: -79.237701 },
        mapTypeId: 'hybrid'
    });

    const image =
    "http://maps.google.com/mapfiles/kml/shapes/grocery.png";
  var groceryMarker = new google.maps.Marker({
    position: { lat: 43.13406401904463, lng: -79.2255863100338},
    map,
    icon: image,
  });
    var groceryMarker = new google.maps.Marker({
    position: { lat: 43.13170339993443, lng:  -79.22568018731423},
    map,
    icon: image,
    });
    var groceryMarker = new google.maps.Marker({
        position: { lat: 43.151444748000074, lng: -79.26798521911768},
        map,
        icon: image,
        });
        var groceryMarker = new google.maps.Marker({
            position: { lat: 43.137747779136774, lng:  -79.21618005560006},
            map,
            icon: image,
            });
            var groceryMarker = new google.maps.Marker({
                position: { lat: 43.17005753972223, lng:  -79.2633206760971},
                map,
                icon: image,
                });
    // Create a renderer for directions and bind it to the map.
    var directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
    // Instantiate an info window to hold step text.
    var stepDisplay = new google.maps.InfoWindow();
    // Display the route between the initial start and end selections.
    calculateAndDisplayRoute(directionsRenderer, directionsService, markerArray, stepDisplay, map);
    // Listen to change events from the start and end lists.
    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsRenderer, directionsService, markerArray, stepDisplay, map);
    };
    document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
}
function calculateAndDisplayRoute(directionsRenderer, directionsService, markerArray, stepDisplay, map) {
    // First, remove any existing markers from the map.
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null);
    }
    // Retrieve the start and end locations and create a DirectionsRequest using
    // Driving directions.
    directionsService
        .route({
        origin: document.getElementById("start").value,
        destination: document.getElementById("end").value,
        travelMode: google.maps.TravelMode.DRIVING,
    })
        .then(function (result) {
        // Route the directions and pass the response to a function to create
        // markers for each step.
        document.getElementById("warnings-panel").innerHTML =
            "<b>" + result.routes[0].warnings + "</b>";
        directionsRenderer.setDirections(result);
        showSteps(result, markerArray, stepDisplay, map);
    })
        .catch(function (e) {
        window.alert("Directions request failed due to " + e);
    });
}
function showSteps(directionResult, markerArray, stepDisplay, map) {
    // For each step, place a marker, and add the text to the marker's infowindow.
    // Also attach the marker to an array so we can keep track of it and remove it
    // when calculating new routes.
    var myRoute = directionResult.routes[0].legs[0];
    for (var i = 0; i < myRoute.steps.length; i++) {
        var marker = (markerArray[i] =
            markerArray[i] || new google.maps.Marker());
        marker.setMap(map);
        marker.setPosition(myRoute.steps[i].start_location);
        attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
    }
}
function attachInstructionText(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, "click", function () {
        // Open an info window when the marker is clicked on, containing the text
        // of the step.
        stepDisplay.setContent(text);
        stepDisplay.open(map, marker);
    });
}
window.initMap = initMap;
// [END maps_directions_complex]

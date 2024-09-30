// script.js

// Initialize the map
var map = L.map('map').setView([40.730610, -73.935242], 14);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to simulate real-time GNSS data
function getGNSSData() {
    var latOffset = (Math.random() - 0.5) * 0.002;
    var lonOffset = (Math.random() - 0.5) * 0.002;
    return [40.730610 + latOffset, -73.935242 + lonOffset];
}

// Real-time road mapping function
function realTimeRoadMapping() {
    for (var i = 0; i < 10; i++) { // Simulate 10 data points
        var newLocation = getGNSSData();
        L.marker(newLocation).addTo(map);
        console.log("New GNSS point added: " + newLocation);
        setTimeout(realTimeRoadMapping, 1000); // Simulate a delay between data points
        break;
    }
}

// Run the road mapping function
realTimeRoadMapping();
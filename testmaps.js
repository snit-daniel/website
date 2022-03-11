$(document).ready(init);


function init() {
    //change the coordinates so it that it shows Dubai coordinates
    var mymap = L.map('mapid').setView([25.1950, 55.2784 ], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 11,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
    
    //write code that adds Khalifa Tower marker on the map

    
    var Khalifa_Tower = L.marker([25.1972, 55.2744]).addTo(mymap);
    Khalifa_Tower.bindPopup("<b>Khalifa Tower</b> <b> لامير </b>.");
    
}
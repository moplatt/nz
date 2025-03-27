/*
Script für die Neuseelandreise
*/

// Karte initialisieren
let map = L.map('map').setView([-46.98, 167.88], 9);
//Hintergrundkarte definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // Marker zeichnen
        let marker = L.marker([-46.98, 167.88]).addTo(map);
        // Popup definieren und öffnen
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
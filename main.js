/*
Script für die Neuseelandreise
*/

let stop = {
    nr: 21,
    title: "Steward Island",
    user: "moplatt",
    lat: -46.98,
    lng: 167.88,
    zoom: 9,
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);
//Hintergrundkarte definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // Marker zeichnen
        let marker = L.marker([stop.lat, stop.lng]).addTo(map);
        // Popup definieren und öffnen
        marker.bindPopup(`
            <h2><b>${stop.title}</b></h2>
            <br> 
            <ul>
                <li>geogr. Länge: ${stop.lat.toFixed(5)}°</li>
                <li>geogr. Breite ${stop.lng.toFixed(5)}°</li>
            </ul>
        `).openPopup();



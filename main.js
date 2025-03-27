/*
Script für die Neuseelandreise
*/

let lat = -46.98;
let lon = 167.88;
let zoom = 9;

let stop = {
    nr: 22,
    titel: "Steward Island",
    user: "moplatt",
    lat: lat,
    lng: lon,
    zoom: zoom,
};

// Karte initialisieren
let map = L.map('map').setView([lat, lon], zoom);
//Hintergrundkarte definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // Marker zeichnen
        let marker = L.marker([lat, lon]).addTo(map);
        // Popup definieren und öffnen
        marker.bindPopup(`
            <h2><b>Steward Island!</b></h2>
            <br> 
            <ul>
                <li>geogr. Länge: ${lat.toFixed(5)}°</li>
                <li>geogr. Breite ${lon.toFixed(5)}°</li>
            </ul>
        `).openPopup();



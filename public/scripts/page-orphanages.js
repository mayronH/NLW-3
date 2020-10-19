const map = L.map('mapid').setView([-19.5397252, -42.6492122], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Passando um objeto no parametro sem precisar escrever o objeto
function addMarker({id, name, lat, lng}){
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
        // Passando as variaveis para dentro da string(interpolar)
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" alt="Ir para a página do orfanato"></a>`)
    
    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
        .openPopup();
}

// Pegando os spans com os dados dos orfanatos
const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach((orphanageSpan) => {
    const orphanage = {
        id: orphanageSpan.dataset.id,
        name: orphanageSpan.dataset.name,
        lat: orphanageSpan.dataset.lat,
        lng: orphanageSpan.dataset.lng
    }

    addMarker(orphanage)
})

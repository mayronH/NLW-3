const options = {
    dragging: false,
    touchZoom: false,
    doubleClicZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')

const map = L.map('mapid', options).setView([spanLat.dataset.lat, spanLat.dataset.lng], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([spanLat.dataset.lat, spanLng.dataset.lng], { icon })
    .addTo(map)


function selectImage(event){
    // Pega quem disparou o evento
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    // Passando uma função por paramêtro
    buttons.forEach((button) => {
        // remove a classe com nome active (.active)
        button.classList.remove("active")
    })

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details>img")

    imageContainer.src = image.src

    button.classList.add("active")
}
const map = L.map('mapid').setView([-19.5397252, -42.6492122], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

map.on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // Se marker existir remover o marker
    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {
        icon
    }).addTo(map);

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

})

function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Criar um clone do ultimo field, o true significa que irá copiar todo o conteúdo do field .new-upload selecionado
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]

    if (input.value != '') {
        newFieldContainer.children[0].value = ""

        // Adiciona o clone ao container #images
        container.appendChild(newFieldContainer)
    }
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length > 1) {
        // Pegar os pais do span
        span.parentNode.remove();
    }

    span.parentNode.children[0].value = ""
}

function toggleSelect(event) {
    const button = event.currentTarget
    const buttons = document.querySelectorAll(".button-select button")

    // Função em uma única linha
    buttons.forEach( button => button.classList.remove("active") )

    button.classList.add("active")

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event){
    const inputLat = document.querySelector('[name="lat"]')
    const inputLng = document.querySelector('[name="lng"]')
    const map = document.querySelector('.map-container')

    if(inputLat.value == '' || inputLng.value == ''){
        map.classList.add("invalid")
        // Impedir de enviar o formulário
        event.preventDefault();
        window.location.hash = "#mapid";
    }else{
        map.classList.add("valid")
    }
}
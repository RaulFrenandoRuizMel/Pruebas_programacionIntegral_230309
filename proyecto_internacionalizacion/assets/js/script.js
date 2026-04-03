let items = document.querySelectorAll('.contenedor .lista_de_elementos .elemento');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .thumb_elemento ');

//config param

let countItem = items.length;
let itemActive = 0;

//event next click

next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

//event prev click

prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

//auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 3000)

function showSlider() {
    //remover elemento activo
    let itemActiveOld = document.querySelector('.contenedor .lista_de_elementos .elemento_activo');
    let thumbnailActiveOld = document.querySelector('.thumbnail .thumb_elemento_activo')
    itemActiveOld.classList.remove('elemento_activo')
    thumbnailActiveOld.classList.remove('thumb_elemento_activo')

    //activar nuevo elemento
    items[itemActive].classList.add('elemento_activo');
    thumbnails[itemActive].classList.add('thumb_elemento_activo');

    //limpiar el auto run
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000)
}

//click thumbnails

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});
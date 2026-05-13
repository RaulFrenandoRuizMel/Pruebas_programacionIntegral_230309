/**
 * conexion_api_menu_sliders.js
 */

// ─── Selectores de contenedores ───────────────────────────────────────────────

const contenedor_uacj = document.querySelector("#contenedor_uacj");
const contenedor_icb  = document.querySelector("#contenedor_icb");
const contenedor_iada = document.querySelector("#contenedor_iada");
const contenedor_icsa = document.querySelector("#contenedor_icsa");
const contenedor_iit  = document.querySelector("#contenedor_IIT");

// ─── Plantilla ────────────────────────────────────────────────────────────────

const plantilla_card_item = document.querySelector(".card-item");

// ─── Llena una sección con tarjetas clonadas ──────────────────────────────────
//     

function llenarSeccion(contenedor, listaConvenios) {
    const cardList = contenedor.querySelector(".card-list.swiper-wrapper");
    cardList.innerHTML = "";

    listaConvenios.forEach(convenio => {
        const clone = plantilla_card_item.cloneNode(true);
        cardList.appendChild(clone);

        clone.querySelector(".nombre_universidad").textContent = convenio.nombre;
        clone.querySelector(".pais_convenio").textContent    = convenio.pais;

        const img = clone.querySelector(".campus_image");
        img.src = `./assets/images/logotipos_campus/${convenio.imagen}.png`;
        img.alt = convenio.nombre;

        // ─── Redirige a fichaPais con el id y categoría correspondientes ──────
        clone.addEventListener("click", () => {
            window.location.href = `fichaPais.html?id=${convenio.id}&pais=${convenio.pais}`;
        });
    });
}

// ─── Inicializa Swiper ────────────────────────────────────────────────────────

function crearSwiper(contenedor) {
    const sliderWrapper = contenedor.querySelector(".slider-wrapper");

    new Swiper(sliderWrapper, {
        loop: false,
        rewind: true,
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: sliderWrapper.querySelector(".swiper-pagination"),
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: sliderWrapper.querySelector(".swiper-button-next"),
            prevEl: sliderWrapper.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
            0:    { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
}

// ─── Fetch ────────────────────────────────────────────────────────────────────

fetch("./assets/json/convenios.json")
    .then(recurso => recurso.json())
    .then(archivo => {
        const datos = archivo.convenios[0];

        // Se pasa la categoría en minúsculas como tercer argumento
        llenarSeccion(contenedor_uacj, datos.UACJ);
        llenarSeccion(contenedor_icb,  datos.ICB);
        llenarSeccion(contenedor_iada, datos.IADA);
        llenarSeccion(contenedor_icsa, datos.ICSA);
        llenarSeccion(contenedor_iit,  datos.IIT);

        crearSwiper(contenedor_uacj);
        crearSwiper(contenedor_icb);
        crearSwiper(contenedor_iada);
        crearSwiper(contenedor_icsa);
        crearSwiper(contenedor_iit);
    })
    .catch(error => console.error("Error al cargar convenios.json:", error));
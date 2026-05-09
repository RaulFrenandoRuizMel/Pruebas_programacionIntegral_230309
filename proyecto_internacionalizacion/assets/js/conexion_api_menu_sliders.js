const contenedor_uacj = document.querySelector("#contenedor_uacj");
const contenedor_icb = document.querySelector("#contenedor_icb");
const contenedor_iada = document.querySelector("#contenedor_iada");
const contenedor_icsa = document.querySelector("#contenedor_icsa");
const contenedor_iit = document.querySelector("#contenedor_iit");

const slider_wrapper = document.querySelector("#slider_wrapper");
const card_list = document.querySelector("#card_list");
const plantilla_card_item = document.querySelector(".card-item");

fetch("http://proyectointegralrfr.atwebpages.com/proyecto_internacionalizacion/assets/json/convenios.json").then(recurso => recurso.json()).then(archivo => {
    for (let i = 0; i < archivo.UACJ.length; i++) {

        let clone = plantilla_card_item.cloneNode(true)
        card_list.appendChild(clone)

        const user_name = clone.querySelector(".nombre_universidad");
        user_name.innerHTML = archivo.UACJ[i].titulo;

        const user_profer = clone.querySelector(".autor_del_libro");
        autor_del_libro.innerHTML = archivo.herejia_de_horus[i].autor;

        const reseñas_del_libro = clone.querySelector(".reseñas_del_libro");
        reseñas_del_libro.innerHTML = archivo.herejia_de_horus[i].calificacion;

        const portada_del_libro = clone.querySelector(".portada");
        portada_del_libro.style.backgroundImage = "url('http://localhost:3000/" + archivo.herejia_de_horus[i].portada + ".jpg" + "')";

        clone.addEventListener("click", () => {
            window.location.href = `fichaLibro.html?id=${archivo.herejia_de_horus[i].id}&categoria=herejia_de_horus`;
        });
    }
})
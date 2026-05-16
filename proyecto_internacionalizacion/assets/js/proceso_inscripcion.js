// Obtener todos los pasos
const pasos = document.querySelectorAll(".paso_proceso");

// Obtener todas las descripciones
const descripciones = document.querySelectorAll(".contenedor_descripcion_pasos");

// Recorrer cada paso
pasos.forEach((paso) => {

    paso.addEventListener("click", () => {

        // =========================
        // QUITAR PASO ACTIVO
        // =========================
        pasos.forEach((p) => {
            p.classList.remove("paso_activo");
        });

        // Agregar clase activa al paso seleccionado
        paso.classList.add("paso_activo");


        // =========================
        // OCULTAR DESCRIPCIONES
        // =========================
        descripciones.forEach((descripcion) => {
            descripcion.classList.add("oculto");
        });


        // =========================
        // MOSTRAR DESCRIPCIÓN
        // =========================

        // Obtener ID del paso seleccionado
        const idPaso = paso.id;

        // Crear el ID de la descripción
        const idDescripcion = "descripcion_" + idPaso;

        // Buscar la descripción correspondiente
        const descripcionMostrar = document.getElementById(idDescripcion);

        // Mostrar descripción
        if (descripcionMostrar) {
            descripcionMostrar.classList.remove("oculto");
        }

    });

});
// ─── Leer parámetros de la URL ────────────────────────────────────────────────
const parametros_url = new URLSearchParams(window.location.search);
const pais_del_programa = parametros_url.get("pais");

// ─── Selectores del HTML ──────────────────────────────────────────────────────

// Sección 1 — Información general
const nombre_del_programa = document.querySelector("#nombre_del_programa");
const ultima_instancia = document.querySelector("#ultima_instancia");
const siguiente_instancia = document.querySelector("#siguiente_instancia");
const sinopsis_del_programa = document.querySelector("#sinopsis_del_programa");
const evaluacion = document.querySelector("#evaluacion");
const choque_cultural = document.querySelector("#choque_cultural");

// Sección 2 — Bases SEP
const edad = document.querySelector("#edad");
const inscripcion = document.querySelector("#inscripcion");
const adeudo = document.querySelector("#adeudo");
const promedio = document.querySelector("#promedio");
const creditos = document.querySelector("#creditos");
const idioma = document.querySelector("#idioma");
const pasaporte = document.querySelector("#pasaporte");

// Sección 3 — Proceso previo (entrevista CDMX)
const examen = document.querySelector("#examen");
const escrito = document.querySelector("#escrito");
const entrevista_frances = document.querySelector("#entrevista_frances");
const entrevista_español = document.querySelector("#entrevista_español");

// Sección 3 — Trámites
const visa = document.querySelector("#visa");
const documentos = document.querySelector("#documentos");

// Sección 4 — Vuelos
const precios = document.querySelector("#precios");
const duracion = document.querySelector("#duracion");
const equipaje = document.querySelector("#equipaje");
const img = document.querySelector("#portada_contenedor");
        

// ─── Función: rellena el HTML con los datos del programa ─────────────────────

function rellenarFicha(programa) {

    // ── Sección 1: información general ────────────────────────────────────────
    img.src = `./assets/images/logotipos_campus/${programa.imagen}.webp`;
    img.alt = programa.nombre;
    nombre_del_programa.textContent = programa.nombre;
    ultima_instancia.textContent = `Última instancia: ${programa.ultima_instancia}`;
    siguiente_instancia.textContent = `Siguiente instancia: ${programa.siguiente_instancia}`;
    sinopsis_del_programa.textContent = programa.descripcion;
    choque_cultural.textContent = programa.choque_cultural;
    evaluacion.textContent = programa.evaluacion;

    // ── Sección 2: bases SEP ──────────────────────────────────────────────────
    const bases = programa.bases_sep[0];
    edad.textContent = `Edad: ${bases.edad}`;
    inscripcion.textContent = `Inscripción: ${bases.inscripcion}`;
    adeudo.textContent = `Adeudo: ${bases.adeudo}`;
    promedio.textContent = `Promedio: ${bases.promedio}`;
    creditos.textContent = `Créditos: ${bases.creditos}`;
    idioma.textContent = `Idioma: ${bases.idioma}`;
    pasaporte.textContent = `Pasaporte: ${bases.pasaporte}`;

    // ── Sección 3: proceso previo ─────────────────────────────────────────────
    const entrevista = programa.proceso_previo[0].entrevista_cd_mx[0];
    examen.textContent = `Examen: ${entrevista.examen}`;
    escrito.textContent = `Escrito: ${entrevista.escrito}`;
    entrevista_frances.textContent = `Entrevista en segundo idioma: ${entrevista.entrevista_segundo_idioma}`;
    entrevista_español.textContent = `Entrevista en español: ${entrevista.entrevista_español}`;

    // ── Sección 3: trámites ───────────────────────────────────────────────────
    const tramites = programa.proceso_previo[0].tramites[0];
    visa.textContent = `Visa: ${tramites.visa}`;
    documentos.textContent = `Documentos: ${tramites.documentos}`;

    // ── Sección 4: vuelos ───────────────────────────────────────────────────
    const vuelos = programa.vuelos[0];
    precios.textContent = `Precios De Viaje: ${vuelos.precios}`;
    duracion.textContent = `Duracion del Viaje: ${vuelos.duracion}`;
    equipaje.textContent = `Equipaje Permitido: ${vuelos.equipaje}`;
}

// ─── Fetch ────────────────────────────────────────────────────────────────────

fetch("./assets/json/datos_programas.json")
    .then(recurso => recurso.json())
    .then(archivo => {

        // Busca el programa cuyo id coincida con el parámetro ?pais= de la URL
        const programa = archivo.programas.find(p => p.id == pais_del_programa);

        if (!programa) {
            console.error(`No se encontró ningún programa con id: "${pais_del_programa}"`);
            nombre_del_programa.textContent = "Programa no encontrado.";
            return;
        }

        rellenarFicha(programa);
    })
    .catch(error => console.error("Error al cargar programas.json:", error));
const titulo_del_programa = pais_del_programa.replaceAll("_", " ");

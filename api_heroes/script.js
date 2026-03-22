const contenedor = document.getElementById("contenedor");
const buscador = document.getElementById("buscador");

// modal
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

const nombre_de_heroe = document.getElementById("nombre_de_heroe");
const nombre_civil = document.getElementById("nombre_civil");
const bando = document.getElementById("bando");
const aliados = document.getElementById("aliados");
const primera_aparicion = document.getElementById("primera_aparicion");
const fuerza = document.getElementById("fuerza_fisica");

//modal-imagen

const modalImagen = document.getElementById("modal-imagen");

cerrar.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

let heroes = [];

// cargar datos
async function cargarPeliculas() {
  try {
    const res = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    heroes = await res.json();
    mostrarHeroes(heroes);
  } catch (error) {
    console.error("Error:", error);
    contenedor.innerHTML = "<p>Error al cargar datos</p>";
  }
}

// mostrar tarjetas
function mostrarHeroes(lista) {
  contenedor.innerHTML = "";

  lista.forEach((heroe, index) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const imagen = heroe.images.lg;

    // limitar a 226 caracteres
    const descripcionCorta = heroe.connections.groupAffiliation.length > 226 ?
      heroe.connections.groupAffiliation.substring(0, 226) + "..." :
      heroe.connections.groupAffiliation;
    
    //estadisticas
      const stats = heroe.powerstats;
      const statKeys = ["intelligence", "strength", "speed", "durability", "power", "combat"];
      const statLabels = {
        intelligence: "Intel",
        strength: "Fuerza",
        speed: "Vel",
        durability: "Dur",
        power: "Poder",
        combat: "Combate"
      };
      
      card.innerHTML = `
        <img src="${imagen}" alt="img">
        <h2>${heroe.name}</h2>
        <p><em>${heroe.biography.fullName}</em></p>
        <p class="descripcion">${descripcionCorta}</p>
        <div class="powerstats-card">
          ${statKeys.map(key => `
            <div class="stat-card">
              <span>${statLabels[key]}</span>
              <div class="barra-fondo">
                <div class="barra-relleno" style="width: ${stats[key] ?? 0}%"></div>
              </div>
              <span>${stats[key] ?? 0}</span>
            </div>
          `).join("")}
        </div>
      `;

    card.addEventListener("click", () => {
      modalImagen.src = heroe.images.sm;
      nombre_de_heroe.textContent = heroe.name;
      nombre_civil.textContent = heroe.biography.fullName;
      bando.textContent = heroe.biography.alignment;
      aliados.textContent = heroe.connections.groupAffiliation;
      //fuerza.textContent = heroe.powerstats.strength;
      primera_aparicion.textContent = heroe.biography.firstAppearance;
      modal.style.display = "block";

      const stats = heroe.powerstats;

      const statKeys = ["intelligence", "strength", "speed", "durability", "power", "combat"];

      statKeys.forEach(key => {
        const valor = stats[key];
        document.getElementById(`stat-${key}`).style.width = valor + "%";
        document.getElementById(`val-${key}`).textContent = valor;
      });
    });

    contenedor.appendChild(card);
  });
}

// buscador
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const filtradas = heroes.filter(p =>
    p.name.toLowerCase().includes(texto)
  );

  mostrarHeroes(filtradas);
});

// iniciar
cargarPeliculas();
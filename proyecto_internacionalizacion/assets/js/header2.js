
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  /* Detectar página activa por nombre de archivo */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (href) => href === page ? 'nav-active' : '';

  header.innerHTML = `
    <!-- MAIN HEADER -->
    <div class="header-inner">
      <a href="index.html" class="logo-block">
        <img class="logo" src="./assets/images/logotipo_uacj.png" alt="">
      </a>
      <nav class="header-nav">
        <a href="menu.html"              class="${isActive('index.php')}">Home</a>
        <a href="proceso_inscripcion.html" class="${isActive('proceso_inscripcion.html')}">Proceso</a>
        <a href="menu.html"      class="${isActive('menu.html')}">Instituciones</a>
        <a href="contacto.html"           class="${isActive('contacto.html')}">Contacto</a>
        <a href="ficha_identidad.html"    class="nav-cta ${isActive('ficha_identidad.html')}">Ficha Identidad</a>
      </nav>
    </div>
  `;
})();

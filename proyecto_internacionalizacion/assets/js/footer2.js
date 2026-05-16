(function () {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-inner">

      <!-- BRAND -->
      <div class="footer-brand">
        <div class="footer-brand-badge"><img class="logo" src="./assets/images/logotipo_uacj.png" alt=""></div>
        <p>
          Universidad Autónoma de Ciudad Juárez — Dirección General de
          Vinculación e Internacionalización. Comprometidos con la formación
          global de nuestra comunidad universitaria.
        </p>
        <div class="social-links">
          <a href="https://x.com/somosuacj" class="social-link" aria-label="Twitter / X">𝕏</a>
          <a href="https://www.facebook.com/internacionalizacion.uacj/?locale=es_LA" class="social-link" aria-label="Facebook">f</a>
          <a href="https://www.youtube.com/@internacionalizacionuacj1261" class="social-link" aria-label="YouTube">▶</a>
        </div>
      </div>
      <!-- Menu -->
      <div class="footer-col">
        <a href="./menu.html"><h4>Inicio</a></h4>
        <ul>
          <li><a href="menu.html#contenedor_de_carrusel">Bienvenida</a></li>
          <li><a href="menu.html#mision">Misión</a></li>
          <li><a href="menu.html#vision">Visión</a></li>
          <li><a href="menu.html#contenedor_uacj">UACJ</a></li>
          <li><a href="menu.html#contenedor_icb">ICB</a></li>
          <li><a href="menu.html#contenedor_iada">IADA</a></li>
          <li><a href="menu.html#contenedor_IIT">IIT</a></li>
          <li><a href="menu.html#contenedor_icsa">ICSA</a></li>
          <li><a href="menu.html#mapa">Donde Encontrarnos</a></li>
        </ul>
      </div>

      <!-- Proceso -->
      <div class="footer-col">
        <a href="./proceso_inscripcion.html"><h4>Proceso</a></h4>
        <ul>
          <li><a href="proceso_inscripcion.html#panel-bases">Bases</a></li>
          <li><a href="proceso_inscripcion.html#panel-registro">Registro</a></li>
          <li><a href="proceso_inscripcion.html#panel-expediente">Propuesta y Asignacion de Institucion receptora</a></li>
          <li><a href="proceso_inscripcion.html#panel-evaluacion">Expediente</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">Documentos Academicos</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">Documentos Personales</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">Documentos de Tramite</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">Evaluacion Y Postulacion de Candidatos</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">Resultados</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">Cancelacion de Estancia Academica</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer-col">
        <h4><a href="./ficha_identidad.html">Ficha Identidad</a></h4>
        <ul>
          <li><a href="ficha_identidad.html#ficha_identidad">Ficha Identidad</a></li>
          <li><a href="ficha_identidad.html#mapa">Geolocalizacion</a></li>
          <li><a href="ficha_identidad.html#contacto">Formulario Contacto</a></li>
        </ul>
      </div>

      <!-- SiteMap -->
      <div class="footer-col">
        <h4><a href="./siteMap.html">SiteMap</a></h4>

        <ul>
          <li><a href="#">Ficha Identidad</a></li>
          <li><a href="#">Geolocalizacion</a></li>
          <li><a href="#">Formulario Contacto</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>

      <!-- CONTACTO -->
      <div class="footer-col">
      <a href="./contacto.html"><h4>Contacto</h4></a>
        
        <ul>
          <li><a href="#">Formulario Contacto</a></li>
          <li><a href="mailto:internacionalizacion@uacj.mx">internacionalizacion@uacj.mx</a></li>
          <li><a href="tel:+526566882100">+52 (656) 688-2100</a></li>
          <li><a href="#">Av. López Mateos 20, Cd. Juárez, Chih.</a></li>
          <li><a href="#">Lun – Vie: 8:00 – 17:00 hrs</a></li>
        </ul>
      </div>

    </div>

    <!-- BOTTOM BAR -->
    <div class="footer-bottom">
      <span>© ${year} Universidad Autónoma de Ciudad Juárez. Todos los derechos reservados.</span>
      <span>
        <a href="#">Aviso de Privacidad</a> &nbsp;·&nbsp;
        <a href="#">Términos de Uso</a> &nbsp;·&nbsp;
        <a href="#">Accesibilidad</a>
      </span>
    </div>
  `;
})();
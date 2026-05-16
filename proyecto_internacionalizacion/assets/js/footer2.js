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

      <!-- Principal -->
      <div class="footer-col">
        <h4>Principal</h4>
        <ul>
          <li><a href="proceso_inscripcion.html#panel-bases">Bienvenida</a></li>
          <li><a href="proceso_inscripcion.html#panel-registro">Misin</a></li>
          <li><a href="proceso_inscripcion.html#panel-expediente">Vision</a></li>
          <li><a href="proceso_inscripcion.html#panel-evaluacion">UACJ</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">ICB</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">IADA</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">IIT</a></li>
          <li><a href="proceso_inscripcion.html#panel-resultados">ICSA</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer-col">
        <h4>Ficha Identidad</h4>
        <ul>
                  <li><a href="#">Ficha Identidad</a></li>
          <li><a href="#">Geolocalizacion</a></li>
          <li><a href="#">Formulario Contacto</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>

      <!-- CONTACTO -->
      <div class="footer-col">
        <h4>Contacto</h4>
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
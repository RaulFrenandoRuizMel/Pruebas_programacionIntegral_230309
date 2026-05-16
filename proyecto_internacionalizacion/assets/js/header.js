const header = document.querySelector("header");

header.innerHTML = `        <div class="logo_header">
            <a id="logo_ir_a_inicio" href="/menu.html" >
                <img class="logo" src="./assets/images/logotipo_uacj.png" alt="">
            </a>
        </div>
        <nav class="navegador_header">
            <div id="ir_a_inicio" class="enlaces activo">
                <button class="btn_header"><a href="menu.html">Home</a></button>
            </div>
            <div class="enlaces">
                <button class="btn_header"><a href="proceso_inscripcion.html">Proceso</a></button>
            </div>
            <div class="enlaces">
                <button class="btn_header"><a href="ficha_identidad.html">Ficha Identidad</a></button>
            </div>
        </nav>`

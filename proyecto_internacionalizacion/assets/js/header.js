const header = document.querySelector("header");

header.innerHTML = `<div class="logo_header">
            <a id="logo_ir_a_inicio" href="/index.html" >
                <img class="logo" src="./assets/images/logotipo_uacj.png" alt="">
            </a>
        </div>
        <nav class="navegador_header">
            <div id="ir_a_inicio" class="activo">
                <a href="index.html">HOME</a>
            </div>
            <div class="enlaces" id="mis_reseñas_usuario">
                <a href="">RESEÑAS</a>
            </div>
            <div class="enlaces">
                <a href="">MI CUENTA</a>
            </div>
        </nav>`

const mis_reseñas_usuario = document.querySelector("#mis_reseñas_usuario");

mis_reseñas_usuario.addEventListener("click", (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("token_sesion");
    console.log("Token actual:", token);

    if (!token || token === "null" || token === "undefined") {
        window.location.href = "error.html";
    } else {
        window.location.href = "reseñas.html";
    }
});
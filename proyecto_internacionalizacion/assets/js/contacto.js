emailjs.init("3dGMGdYPVaLAFnH1m");

const btn = document.getElementById('button');

document.getElementById('contact_form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerText = 'Enviando...';

        const serviceID = 'service_6m7y96i';
        const templateID = 'template_9d8816g';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = 'Enviar Mensaje';
                alert("Mensaje enviado con exito has contactado al grupo de contacto para los cursos de internacionalizacion");
                this.reset();
            }, (err) => {
                btn.innerText = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            })
    })
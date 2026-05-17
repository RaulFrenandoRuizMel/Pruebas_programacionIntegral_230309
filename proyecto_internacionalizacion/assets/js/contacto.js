/*emailjs.init("3dGMGdYPVaLAFnH1m");

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
    });*/

emailjs.init("3dGMGdYPVaLAFnH1m");

const btn = document.getElementById('button');

document.getElementById('contact_form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerText = 'Enviando...';

        const serviceID = 'service_6m7y96i';
        const templateID = 'template_9d8816g';

        // Recopila los datos del formulario para enviarlos a PHP
        const formData = new FormData(this);

        // Ejecuta EmailJS y guardado en BD al mismo tiempo
        Promise.all([
            emailjs.sendForm(serviceID, templateID, this),
            fetch('guardar_contacto.php', {
                method: 'POST',
                body: formData
            })
        ])
        .then(([emailResult, phpResponse]) => phpResponse.text())
        .then((phpText) => {
            btn.innerText = 'Enviar Mensaje';

            // Si PHP devuelve algún error lo mostramos
            if (phpText.includes('Error')) {
                alert("Correo enviado, pero hubo un error al guardar: " + phpText);
            } else {
                alert("Mensaje enviado con éxito, has contactado al grupo de internacionalización.");
            }

            document.getElementById('contact_form').reset();
        })
        .catch((err) => {
            btn.innerText = 'Enviar Mensaje';
            alert("Error: " + JSON.stringify(err));
        });
    });
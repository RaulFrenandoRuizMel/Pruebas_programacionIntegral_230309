function getCharacter(done){    // Se realiza una petición HTTP a la API de Rick and Morty
    const results = fetch("https://rickandmortyapi.com/api/character"); //Aqui conecta a la api de rick y morty en su apartado de personajes

    results
    .then(response => response.json())    // Convierte la respuesta en formato JSON (también devuelve una promesa)
    .then(data => {
        done(data)
    });
}

// Se llama a la función getCharacter y se le pasa una función como argumento
getCharacter(data => {
    console.log(data);
        // Muestra en consola los datos recibidos de la API

})
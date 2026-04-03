function initMap(){
    const ubicacion = { lat: 31.6904, lng: -106.4245};

    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: ubicacion,
    });

    new google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: "Nombre de tu negocio",
      });
}
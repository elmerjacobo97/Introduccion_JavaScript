const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausar: function () {
        console.log('Pausando...')
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando canción: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(200);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
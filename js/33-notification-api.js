const boton = document.querySelector('#boton');
boton.addEventListener('click', function () {
    Notification.requestPermission()
        .then((resultado) => console.log(`El resultado es ${resultado}`))
        .catch((error) => console.log(error))
})

if (Notification.permission === 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Elmer, Aprendiendo JS'
    })
}

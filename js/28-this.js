const reservacion = {
    nombre: 'Elmer',
    apellido: 'Jacobo',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();


// Nota
// this hace referencia al objeto actual, utilizando function,
// pero si utilizamos arrow functions hace referencia a la ventana global (window) - "undefined"
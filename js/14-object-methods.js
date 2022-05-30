// "use strict"; // Habilitar modo estricto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true
}

// .freeze - Congelar objeto
// Object.freeze(producto);

// .seal - solo permite modificar las existentes
// Object.seal(producto);

// .isFrozen - saber si un objeto está congelado
console.log(Object.isFrozen(producto));

// producto.imagen = 'imagen.jpg';
// producto.precio = "NUEVO PRECIO";

console.log(producto)
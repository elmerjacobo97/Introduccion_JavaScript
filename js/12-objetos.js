const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true
}

// Acceder a las propiedades
// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// Otra forma...
// console.log(producto['precio'])

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;

console.log(producto);
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true
}

// Forma anterior
const nombreProducto = producto.nombre;
const precioProducto = producto.precio;

// console.log(nombreProducto);
// console.log(precioProducto);

// Ahora - Extrae el valor y crea la variable
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);
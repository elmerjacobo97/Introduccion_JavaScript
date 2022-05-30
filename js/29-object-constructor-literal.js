// POO
// Object Literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 500
}

console.log(producto)

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} ${this.apellido}`
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

const producto1 = new Producto('Monitor curvo de 49 pulgadas', 1000, true);
const producto2 = new Producto('Laptop', 5000, false);
const producto3 = new Producto('Tablet', 200, true);
const producto4 = new Producto('Audífonos', 100, false);
const cliente = new Cliente('Elmer', 'Jacobo');

console.log(producto1.formatearProducto())
console.log(producto2.formatearProducto())
console.log(producto3)
console.log(producto4)
console.log(cliente.formatearCliente())
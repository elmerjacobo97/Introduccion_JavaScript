const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'laptop', precio: 800 },
]

// ForEach
carrito.forEach((producto) => console.log(producto.nombre));

// Map - crea un nuevo arreglo
const nuevoArreglo = carrito.map((producto) => `${producto.nombre} - ${producto.precio}`);
console.log(nuevoArreglo);
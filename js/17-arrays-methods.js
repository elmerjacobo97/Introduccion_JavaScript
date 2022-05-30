const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// Arreglo de objetos
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
meses.forEach(function (mes) {
    if (mes === 'Marzo') {
        console.log('Marzo si existe')
    }
})

// Includes - true o false
let resultado = meses.includes('Marzo')

// Some - ideal para arreglo de objetos
resultado = carrito.some(function (producto) {
    return producto.nombre === 'Celular'
})

// Reduce - retorna un total
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0)

// Filter - filtrar elementos
resultado = carrito.filter(function (producto) {
    return producto.precio > 400
})
resultado = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular'
})

console.log(resultado)
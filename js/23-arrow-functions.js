const sumar = (n1, n2) => console.log(n1 + n2)
sumar(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('JavaScript');

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
meses.forEach((mes) => {
    if (mes === 'Marzo') {
        console.log('Marzo si existe')
    }
})


// Some - ideal para arreglo de objetos
resultado = carrito.some((producto) => producto.nombre === 'Celular');

// Reduce - retorna un total
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter - filtrar elementos
resultado = carrito.filter((producto) => producto.precio > 400);

resultado = carrito.filter((producto) => producto.nombre !== 'Celular');

console.log(resultado)
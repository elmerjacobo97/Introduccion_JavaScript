const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}


// Unir dos o más objetos
const nuevoProducto = {...producto, ...medidas};
console.log(producto);
console.log(nuevoProducto);
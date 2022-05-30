class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }
    formatearPrecio() {
        return `${this.precio}`
    }
}

// Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    formatearPrecio() {
        return super.formatearPrecio();
    }
}

const producto1 = new Producto('Monitor curvo de 49 pulgadas', 1000);
const producto2 = new Producto('Laptop', 5000);
const libro = new Libro('JavaScript la Revolución', 120, '4479439749387938');

console.log(producto1.formatearProducto())
console.log(producto2.formatearPrecio())
console.log(libro.formatearProducto())
console.log(libro.formatearPrecio())
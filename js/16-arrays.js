const numbers = [10, 20, 30, 40, 50];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
// const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'Elmer', trabajo: 'Programador'}, [1, 2, 3]];


// console.log(arreglo)

// Acceder a los valores de un arreglo
// console.log(numbers[3])
// console.log(numbers[200]) // undefined

// Conocer la extensión de un arreglo
// console.log(meses.length)

// Recorrer un arreglo
// numbers.forEach(function (numero) {
//     console.log(numero)
// })

// .push - agregar al final
numbers.push(60, 70, 80);

// .unshift - agregar al inicio
numbers.unshift(-10, -20, -30);

// // .pop - elimina el ultimo
// meses.pop()
//
// // .shift - elimina el primero
// meses.shift()
//
// // .splice - eliminar según su índice y cuántos
// meses.splice(2, 1)

console.table(numbers)
console.table(meses)

// No modificar el arreglo original - spread operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo)
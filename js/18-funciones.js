// Declaración de la función
function sumar() {
    console.log(10 + 10)
}
sumar();

// Expresión de la función - (no pueden llamarse antes de ser inicializadas)
const sumar2 = function () {
    console.log(3 + 3)
}

sumar2();

// IIFE - proteger variables y funciones de determinado archivo
(function (){
    console.log('Esto es una función')
})();
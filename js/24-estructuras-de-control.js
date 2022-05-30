// const puntaje = 1000;
// if (puntaje === 1000) {
//     console.log('SI el puntaje es igual')
// } else {
//     console.log('NO es igual')
// }

// const efectivo = 1000;
// const carrito = 800;
//
// if (efectivo > carrito) {
//     console.log('El usuario puede pagar')
// } else {
//     console.log('El usuario no puede pagar')
// }

const rol = 'EDITOR';

if (rol === 'ADMIN') {
    console.log('Acceso a todo el sistema')
} else if (rol === 'EDITOR') {
    console.log('Puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso');
}
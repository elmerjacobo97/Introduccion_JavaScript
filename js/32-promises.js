const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado'); // el promise se cumple
    } else {
        reject('No se puedo iniciar sesión'); // no se cumple
    }
})

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))

// En los Promises existen 3 valores
// 1. Pending - No se ha cumplido, pero tampoco se ha rechazado
// 2. Fulfilled - Ya se cumplió
// 3. Rejected - Se ha rechazado o no se pudo cumplir

console.log(usuarioAutenticado)
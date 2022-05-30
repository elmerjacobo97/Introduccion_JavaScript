const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
const producto = "Monitor 20 pulgadas";
const email = "correo@correo.com";
// const producto2 = String("Monitor de 30 pulgadas");
// const producto3 = new String("Monitor de 30 pulgadas");

// .length - conocer la extensión de un string
console.log(tweet.length);

// IndexOf - encontrar un elemento en un string (retorna posición)
console.log(tweet.indexOf('JavaScript'));
console.log(producto.indexOf('tablet'));
console.log(email.indexOf('@'));

// Includes - (retorna true o false)
console.log(tweet.includes('curso'));
console.log(producto.includes('tablet'));
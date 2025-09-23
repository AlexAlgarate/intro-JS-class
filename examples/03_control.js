console.log('03. Variables de control');

const firstProductName = 'T-shirt';
let firstProductPrice = 15;
let firstProductQuantity = 2;

const secondProductName = 'Pants';
let secondProductPrice = 35;
let secondProductQuantity = 2;

let message = '';

// Si el producto 1 > 2 "Primer producto más caro que el segundo"
// Si es el mismo producto igual de precio
// si es 1 < 2 primer producto es barato

if (firstProductPrice > secondProductPrice) {
  message = 'Primer producto más caro que el segundo';
} else if (firstProductPrice === secondProductPrice) {
  message = 'mismo precio';
} else {
  message = 'primer producto es barato'; // se ejecuta esta condición
}
console.log(message);
secondProductPrice = 15;
if (firstProductPrice > secondProductPrice) {
  message = 'Primer producto más caro que el segundo';
} else if (firstProductPrice === secondProductPrice) {
  message = 'mismo precio'; // se ejecuta esta condición
} else {
  message = 'primer producto es barato';
}
console.log(message);

firstProductPrice = 20;
if (firstProductPrice > secondProductPrice) {
  message = 'Primer producto más caro que el segundo'; // se ejecuta esta condición
} else if (firstProductPrice === secondProductPrice) {
  message = 'mismo precio';
} else {
  message = 'primer producto es barato';
}

console.log(message);

// operador ternario
const sameName = firstProductName === secondProductName;
const samePrice = firstProductPrice === secondProductPrice;

const message2 = sameName && samePrice ? 'Mismos productos' : 'Son diferentes';
console.log(sameName); // false
console.log(samePrice); // false

console.log(message2); // "Son diferentes"

// Switch
const day = 'Tuesday';
let message3 = '';
/*
if (day == 'Monday') {
  message3 = 'Hay clase es Lunes';
} else if (day == 'Tuesday') {
  message3 = 'Hay clase es Martes';
} else {
  message3 = 'No hay clase';
}
*/

switch (day) {
  case 'Monday':
    message3 = 'Hay clase es Lunes';
    break;
  case 'Tuesday':
    message3 = 'Hay clase es Martes';
    break;
  default:
    message3 = ' No hay clase';
    break;
}

console.log(message3);

// Ejercicio de clase
/*
EJERCICIO 1

Dado estos productos. 

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;


Calcula el precio total de todos los productos sumando los subtotales de cada uno (precio * cantidad).

Usa una estructura condicional (if, else if, else) para mostrar un mensaje según el total:
Si el total es menor a 50, muestra "Puedes agregar más productos".
Si el total es entre 50 y 100, muestra "Estás cerca de tu límite de compra".
Si el total es mayor a 100, muestra "Has alcanzado el límite de tu compra".

Muestra el total y el mensaje en un único console.log.

*/

const productAName = 'T-shirt';
const productAPrice = 20;
const productAQuantity = 2;

const productBName = 'Cap';
const productBPrice = 35;
const productBQuantity = 1;

const productCName = 'Socks';
const productCPrice = 10;
const productCQuantity = 3;

const subtotalA = productAPrice * productAQuantity;
const subtotalB = productBPrice * productBQuantity;
const subtotalC = productCPrice * productCQuantity;

const total = subtotalA + subtotalB + subtotalC;
let messageExercise = '';

if (total < 50) {
  messageExercise = 'Puedes agregar más productos';
} else if (total <= 100) {
  messageExercise = 'Estás cerca de tu límite de compra';
} else {
  messageExercise = 'Has alcanzado el límite de tu compra';
}

console.log(`Total: ${total} || Message: ${messageExercise}`);

// Falsy-truthy

const valor1 = 32;
const valor2 = 'hola';

let isTruthy = valor1 ? 'Es verdadero' : 'Es falso';

console.log(isTruthy);

const valor3 = 0;
const valor4 = '';
const valor5 = null;
const valor6 = undefined;
const valor7 = NaN;

console.log(valor3, ' -- ', valor3 ? 'Es verdadero' : 'Es falso');
console.log(valor4, ' -- ', valor4 ? 'Es verdadero' : 'Es falso');
console.log(valor5, ' -- ', valor5 ? 'Es verdadero' : 'Es falso');
console.log(valor6, ' -- ', valor6 ? 'Es verdadero' : 'Es falso');
console.log(valor7, ' -- ', valor7 ? 'Es verdadero' : 'Es falso');

const price = parseInt(prompt('Dime un precio')); // Devuelve Null si no se le pasa nada a prompt o el valro en forma de cadena de texto
console.log(price);
console.log(typeof price);

message = '';

if (price) {
  message = 'Tiene precio';
} else {
  message = 'No tiene precio';
}
console.log(message);

/*
EJERCICIO 2

Crea un programa que determine si un usuario puede recibir una promoción basada en su selección de productos.

Instrucciones:

1. Crea dos variables que representen el nombre de un producto seleccionado por el usuario y la cantidad. (En nuestro caso será usando prompt).
  const selectedProduct = prompt('Ingresa el nombre del producto');
  const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));


2. Usa operadores lógicos para determinar si el usuario puede tener para una promoción especial:
  -Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
  -Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
  -Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log.

*/

const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

let messageExercise2 = '';

if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
  messageExercise2 = '¡Recibes un 10% de descuento en la segunda camiseta!';
} else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
  messageExercise2 = '¡Obtén una gorra gratis por la compra de 3!';
} else {
  messageExercise2 = 'No hay promociones para esta selección';
}
console.log(messageExercise2);

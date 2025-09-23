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

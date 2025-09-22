// asignacion

const x = 10;
let y = 20;

// aritmeticos
const firstProductName = 'Camiseta';
const firstProductPrice = 10;
const firstProductQuantity = 2;
const secondProductName = 'Pantalon';
const secondProductPrice = 20;
const secondProductQuantity = 3;

const suma = firstProductPrice + secondProductPrice;
const totalFirstProduct = firstProductPrice * firstProductQuantity;
const totalSecondProduct = secondProductPrice * secondProductQuantity;
let totalCompra = totalFirstProduct + totalSecondProduct;

console.log('El total de la compra es ' + totalCompra);

const discount = 20;
totalCompra -= discount;
console.log(`El total de la cuenta con descuento es ${totalCompra}`);

console.log('12' - '1'); // 11
console.log(' 12 ' - '1'); //1
console.log(0.1 + 0.2 !== 0.3); // true

// operadores de comparación

console.log(12 == 12); // true or false (en este caso true)
console.log(`12 != 11: ${12 != 11}`); // true
console.log(`12 == "12"?? ${12 === '12'}`); // Esto retorna false porque los tipos no son iguales
console.log(`12 == "12"?? ${12 == '12'}`); // Esto retorna true porque aunque
// los tipos son distintos, JS transforma "12" en 12 por lo que es igual al otro valor
console.log(firstProductPrice > secondProductPrice); // false 10 < 20
console.log(NaN === NaN); // false
console.log(isNaN('Perro' + 1)); // true, sumar string + Number == NaN

// && || ,

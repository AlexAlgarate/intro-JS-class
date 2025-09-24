const firstProductName = 'T-Shirt';
const firstProductPrice = 35;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 55;
const secondProductQuantity = 2;

const discount = 10;

/**
 * Calculate the total price of the product.
 * @param {number} price -product price
 * @param {number} quantity -product quantity
 * @returns
 */
function calculateProductPrice(price, quantity) {
  const totalPrice = price * quantity;
  return totalPrice;
}

const firstProductTotal = calculateProductPrice(
  firstProductPrice,
  firstProductQuantity
);
const secondProductTotal = calculateProductPrice(
  secondProductPrice,
  secondProductQuantity
);

console.log(firstProductTotal, ',', secondProductTotal);

// Arrow functions

const calculateProductPriceArrow = (price, quantity) => {
  const totalPrice = price * quantity;
  return totalPrice;
};

/*
La arrow function, si es corta como este caso, se puede escribir en una sola línea
const calculateProductPriceArrow = (price, quantity) =>  price * quantity;
*/

const firstProductTotalArrow = calculateProductPriceArrow(
  firstProductPrice,
  firstProductQuantity
);
const secondProductTotalArrow = calculateProductPriceArrow(
  secondProductPrice,
  secondProductQuantity
);
console.log(firstProductTotalArrow, ',', secondProductTotalArrow);

/*
Crea una función para poder usar el código de la promoción de productos en el carrito de compras. 

Esta función debe recibir el nombre del producto y la cantidad, y devolver un mensaje con la promoción aplicada.

Usa tu código o este:
let message = '';
Verificando las condiciones para aplicar la promoción
if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
  message = '¡Recibes un 10% de descuento en la segunda camiseta!';
} else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
  message = '¡Obtén una gorra gratis por la compra de 3!';
} else {
  message = 'No hay promociones para esta selección';
}

ejemplo
const result = tuFuncion('prod1', 12);
console.log(result); // No hay promociones para esta selección

*/

const getPromotionMessage = (product, quantity) => {
  let message = '';
  if (product === 'T-shirt' && quantity >= 2) {
    message = '¡Recibes un 10% de descuento en la segunda camiseta!';
  } else if (product === 'Cap' && quantity >= 3) {
    message = '¡Obtén una gorra gratis por la compra de 3!';
  } else {
    message = 'No hay promociones para esta selección';
  }
  return message;
};

const result1 = getPromotionMessage('prod1', 12);
const result2 = getPromotionMessage('Cap', 12);
console.log(result1); // No hay promociones para esta selección
console.log(result2); // ¡Obtén una gorra gratis por la compra de 3!

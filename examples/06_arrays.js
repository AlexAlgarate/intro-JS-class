const myProducts = ['TV', 'PC', 'Cap', 'T-shirt'];

console.log('Primer producto: ', myProducts[0]); // TV
console.log('Segundo producto: ', myProducts[1]); // PC
console.log('Tercer producto: ', myProducts[2]); // Cap
console.log('Cuarto producto: ', myProducts[3]); // T-Shirt
console.log('Producto que no existe en el array: ', myProducts[4]); // undefined

const firstProduct = myProducts[0];
console.log(firstProduct.toLowerCase()); // tv

myProducts.push('Shoes'); // añade un elemento al final del array
console.log('añadir un elemento al final', myProducts);
console.log(myProducts.pop()); // borra el último elemento del array y lo devuelve. Es decir, se puede asignar a una variable.
console.log('borra el último elemento del array y devuelve ese elemento', myProducts);
console.log(myProducts.shift()); // borra el primer elemento del array y lo devuelve. Es decir, se pueded asignar a una variable.
console.log('Borra el primer elemento del array', myProducts);

// Cambiar el valor de la posición 0 con una ternaria

myProducts[0] = myProducts[0] === 'Pc' ? 'PS5' : myProducts[0];
console.log(myProducts);

const addProducts = (list, item) => {
  const newList = [...list];
  newList.push(item);
  return list;
};

// const myProductsBeforeAddingNewOnes = myProducts;
// Si no [...Array], pese a hacer una copia, no es inmutable y aunque modifiquemos
// myProducts, myProductsBeforeAddingNewOnes también es modificado.

// spread operator [...Array
const myProductsBeforeAddingNewOnes = [...myProducts];
console.log('1', myProductsBeforeAddingNewOnes);

const nuevaLista = addProducts(myProducts, 'Mac');
myProducts.pop();
console.log('2 myProductsBeforeAddingNewOnes', myProductsBeforeAddingNewOnes);
console.log('3 myProducts', myProducts);
console.log('4 nuevaLista', nuevaLista);

const input1 = ['keepcoding', 'testeo', 'html'];

// Acceder a la última posición. Slice devuelve un array
console.log('inputs slice()', input1.slice(-1));

// Acceder a la última posición. At devuelve directamente el valor.
console.log('inputs slice()', input1.at(-1));

// Darle la vuelta al listado. MUTA EL ARRAY ORIGINAL!!!!!!!!
console.log('Reverse -->', input1.reverse());
input1.reverse();
// Incluye ese valor en la lista? --> Return bool
console.log(input1.includes('test')); // false
console.log(input1.includes('testeo')); // true

// indexOf devuelve la posición. Si no hay coincidencia devuelve -1
console.log(input1.indexOf('html')); // 2
console.log(input1.indexOf('htl')); // -1

// Una forma de borrar un elemento en medio del array...

const positionTesteo = input1.indexOf('testeo');
// le decimos desde dónde queremos que borre y hasta donde.
// En este caso, solo borramos ese elemento testeo
input1.splice(positionTesteo, 1);

// join para unir elementos con un separador que queramos
// Por defecto pone la coma
console.log(input1.join());
console.log('Sin join', input1, 'Con join()', input1.join(' -- // '));

const csvRow = 'TV,CAP,T-SHIRT';

const displayProducts = (product1, product2, product3) => {
  return `
    Producto 1: ${product1.toLowerCase().trim()}
    Producto 2: ${product2.toLowerCase().trim()}
    Producto 3: ${product3.toLowerCase().trim()}
  `;
};

const csvProducts = csvRow.split(','); // Parte el string por el separador que le decimos

const display = displayProducts(csvProducts[0], csvProducts[1], csvProducts[2]);
const displaySpread = displayProducts(...csvProducts);
console.log(display);
console.log(displaySpread);

/*
Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
*/

const numeros = [];
numeros.push(1, 2, 3, 'keepcoding', 4, 5);
console.log(numeros);
console.log(numeros.includes('keepcoding') ? 'Este array no solo tiene números':'')
numeros.unshift(10);
console.log(numeros);
const indexKeepcoding = numeros.indexOf('keepcoding');
console.log(indexKeepcoding)
numeros.splice(indexKeepcoding, 1);
console.log(numeros)
console.log(numeros.length)
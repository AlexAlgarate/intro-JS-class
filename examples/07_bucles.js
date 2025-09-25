// 07 bucles

const fruits = ['apple', 'banana', 'kiwi skip', 'watermelon error', 'orange', 'lemon'];

for (let index = 0; index < fruits.length; index++) {
  let message = '';
  const fruit = fruits[index];
  if (fruit.includes('lemon')) {
    message = `${message}****`;
  } else {
    message = `${message}${fruit}`;
  }
  console.log(message);
}

console.log('\n');

for (let index = 0; index < fruits.length; index++) {
  let message = '';
  const fruit = fruits[index];

  // continue
  // Se va a saltar la fruta que tiene 'skip' en su nombre, en este caso kiwi
  if (fruit.includes('skip')) {
    continue;
  }

  // break
  // Se va a parar el bucle cuando encuentre la palabra 'error'
  if (fruit.includes('error')) {
    break;
  }
  if (fruit.includes('lemon')) {
    message = `${message}****`;
  } else {
    message = `${message}${fruit}`;
  }
  console.log(message.trim());
}

// Vamos a añadir los elementos que no tengan ni skip ni error
let newFruitList = [];

for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];

  if (!fruit.includes('skip') && !fruit.includes('error')) {
    newFruitList = [...newFruitList, fruit];
    // newFruitList = [].concat(newFruitList, fruit) // Forma antigua antes del spread operator
    // newFruitList.push(fruit) // El push puede generar problemas, así que es mejor usar el spread operator
  }
}
console.log(newFruitList);

// Bucle for of
for (let fruit of fruits) {
  console.log(fruit);
}

/*
Dado este listado de valores, crea un programa que separe los números pares de los impares en dos arrays diferentes.
*/
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

let evenNumbers = []; // Array para almacenar números pares
let oddNumbers = []; // Array para almacenar números impares

// Para mostrarlos por pantalla que se muestren en un console.log fuera del bucle

for (let num of numbers) {
  if (typeof num === 'number' && !isNaN(num)) {
    if (num % 2 === 0) {
      evenNumbers = [...evenNumbers, num];
    } else {
      oddNumbers = [...oddNumbers, num];
    }
  }
}

console.log('even:', evenNumbers, 'odd: ', oddNumbers);
console.log(false % 2);

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

// for (let fruit of fruits) {
//   console.log(fruit);
// }

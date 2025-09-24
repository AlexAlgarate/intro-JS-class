let username = 'Keepcoding    ';
let password = '   Segura1234  ';

username = username.trim().toLowerCase(); // Patrón chaining (patrón cadena)
password = password.trim().toLowerCase();

let message = '';
if (username === 'keepcoding' && password === 'segura1234') {
  message = 'Tienes acceso';
} else {
  message = 'No tienes acceso';
}

console.log(message);

const email = '    Test@keepcoding.com   ';

console.log(email.trim().toLowerCase().includes('@keepcoding.com')); // includes retorna un bool

console.log(email.trim().toLowerCase().replaceAll('test', '****'));

console.log(email.length); // 26 porque cuenta los espacios en blanco
console.log(email.trim().length); // 19 después de haberle quitado los espacios en blanco
console.log(email.trim().length >= 20); // Devuelve bool (false en este caso)

const obj = {
  a: true,
  b: true,
  𐊧: true,
};

const email2 = prompt('Escribe tu email');
if (!email2) {
  throw new Error('Por favor, inserta un email válido.');
}

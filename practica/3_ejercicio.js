// Ejercicio 3.1

const yourFunction = (array) => {
  const extension = array.slice(-1)[0];
  const path = array.slice(0, -1).join('/');

  console.log(`'${path}.${extension}'`);
};

const input1 = ['Downloads', 'Videos', 'capture', 'mp4'];
yourFunction(input1); // 'Downloads/Videos/capture.mp4'
const input2 = ['CodinGame', 'python', 'py'];
yourFunction(input2); // 'CodinGame/python.py'
const input3 = [
  'programming',
  'languages',
  'easy',
  'beginner',
  'useful',
  'pythonstuff',
  'py',
];
yourFunction(input3);
// 'programming/languages/easy/beginner/useful/pythonstuff.py'

const fs = require('fs');
// const filePath = './09. 기본 수학 2/01. 소수 찾기/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split(' ').map((value) => +value);
let counter = 0;

const isPrime = (num) => {
  if (num < 2) {
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return;
    }
  }
  counter++;
};

numbers.forEach(isPrime);

console.log(counter);

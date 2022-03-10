const fs = require('fs');
// const filePath = './09. 기본 수학 2/03. 소인수분해/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

let num = input;
let i = 2;
const primes = [];

while (true) {
  if (num === 1) {
    break;
  } else {
    if (num % i === 0) {
      num /= i;
      primes.push(i);
      i = 1;
    }
    i++;
    if (i > num) {
      break;
    }
  }
}

console.log(primes.join('\n'));

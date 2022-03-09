const fs = require('fs');
// const filePath = './09. 기본 수학 2/02. 소수/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(value => +value);

const numbers = new Array(input[1] - input[0] + 1).fill(0);
const prime = [];
let saveNum = input[0];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = saveNum;
  saveNum++;
}

const isPrime = (num) => {
  if (num < 2) {
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return;
    }
  }
  prime.push(num);
}

numbers.forEach(isPrime);

const MIN = Math.min(...prime);
const SUM = prime.reduce((prev, curr) => prev + curr, 0);

if (prime.length === 0) {
  console.log(-1);
} else {
  console.log(SUM);
  console.log(MIN);
}

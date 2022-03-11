const fs = require('fs');
// const filePath = './09. 기본 수학 2/04. 소수 구하기/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [M, N] = input;

const isPrimeNumbers = new Array(N + 1).fill(true);
isPrimeNumbers[0] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (isPrimeNumbers[i]) {
    let j = 2;
    while (i * j <= N) {
      isPrimeNumbers[i * j] = false;
      j++
    }
  }
}

const result = [];

for (let i = M; i <= N; i++) {
  if (isPrimeNumbers[i]) {
    result.push(i);
  }
}

console.log(result.join('\n'));

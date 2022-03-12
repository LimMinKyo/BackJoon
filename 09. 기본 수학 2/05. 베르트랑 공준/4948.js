const fs = require('fs');
// const filePath = './09. 기본 수학 2/05. 베르트랑 공준/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(value => +value);

input.pop();

for (let i = 0; i < input.length; i++) {
  const n = input[i];
  const n2 = n * 2;

  const isPrimeNumbers = new Array(n2 + 1).fill(true);
  isPrimeNumbers[0] = false;
  isPrimeNumbers[1] = false;
  
  for (let j = 2; j <= Math.ceil(Math.sqrt(n2)); j++) {
    if (isPrimeNumbers[j]) {
      let k = 2;
      while (j * k <= n2) {
        isPrimeNumbers[j * k] = false;
        k++
      }
    }
  }
  
  const result = [];

  for (let j = n + 1; j <= n2; j++) {
    if (isPrimeNumbers[j]) {
      result.push(j);
    }
  }

  console.log(result.length);
}

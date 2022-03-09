## 풀이 및 코드

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(value => +value);

// 주어진 두 수 사이의 값의 개수만큼 numbers 배열을 만들어준다.
const numbers = new Array(input[1] - input[0] + 1).fill(0);
const prime = [];
let saveNum = input[0];

// 주어진 두 수 사이에 있는 값들로 numbers 배열을 채워준다.
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = saveNum;
  saveNum++;
}

// 소수를 판별하고 소수일 경우 prime(소수) 배열에 push해주는 함수를 정의한다.
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

// 주어진 두 수 사이에 소수를 찾는다.
numbers.forEach(isPrime);

// 소수 중 최솟값과 소수들의 합을 구한다.
const MIN = Math.min(...prime);
const SUM = prime.reduce((prev, curr) => prev + curr, 0);

// 판별할 소수가 없을 경우 -1을 출력하고 아니라면 소수들의 합과 최솟값을 출력한다.
if (prime.length === 0) {
  console.log(-1);
} else {
  console.log(SUM);
  console.log(MIN);
}
```

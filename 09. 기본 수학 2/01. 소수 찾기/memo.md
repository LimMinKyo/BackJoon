## 풀이
**소수**란 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수이다.

`0` 또는 `1`은 소수가 아니므로 `if(n < 2)` 조건문을 걸어 `return;` 했고,

`2`부터 `자기 자신 - 1`까지 나눠주면서 나머지가 `0`된다면 소수가 아니므로 `return;`

위의 조건에 모두 해당되지 않는다면, 해당 숫자는 소수이므로 `counter++;` 해준다.

## 코드

```js
const fs = require('fs');
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
```

___

- 참고: https://dpsc615.tistory.com/103
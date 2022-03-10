## 풀이
`1`은 표현을 하지 않아도 되기 때문에 `2`부터 시작하며 해당 수를 나누면서 진행하면 소인수를 얻을 수 있다.

나누어서 `0`이 되는 숫자를 찾게 된다면, 나누어서 소인수를 저장하고 다시 `2`부터 나누기를 시도하며 진행한다.

작은 숫자에서부터 차례로 검사하며 배열에 넣기 때문에 소수를 오름차순으로 정렬을 하라는 요구조건은 따로 처리를 하지 않아도 만족한다.

## 코드

```js
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var num = parseInt(input[0]);
 
var i = 2;
var primes = []
while (true) {
  if (num % i === 0) {
    num = num / i
    primes.push(i)
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}
 
console.log(primes.join("\n"));
```

___

- 출처: https://chunghyup.tistory.com/55
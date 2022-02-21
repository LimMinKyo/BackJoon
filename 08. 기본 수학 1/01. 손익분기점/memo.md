## 풀이
A는 고정 비용, B는 가변 비용, C는 판매 가격입니다. <br>
식을 만들어 보면 마진은 판매 가격에서 가변 비용을 빼주면 마진 값을 구할 수 있습니다. <br>
고정 비용에서 이 값을 나눠주면 손익분기점이 나옵니다.

이때 손익분기점이 아닌 넘기는 수를 구해야 하므로 1을 더해줍니다. <br>
이후 만약에 마진이 음수이거나 0이면 -1을 출력하고 아닐 시 구한 손익분기점을 출력해 줍니다. 

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count);
```

___

- 출처: https://gurtn.tistory.com/47
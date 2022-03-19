## 풀이
유클리드 기하학에서 반지름이 R인 원이 넓이는 `'반지름 * 반지름 * PI'`이고

택시 기하학에서 반지름이 R인 원의 넓이는 **마름모**와 같으므로, `'밑변 * 높이 * 2'(직사각형 넓이 * 2라고 생각)`로 풀어주면 된다.

## 코드

```js
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

const radius = input;
const euclidArea = radius * radius * Math.PI;
const texiArea = radius * radius * 2;

console.log(euclidArea.toFixed(6));
console.log(texiArea.toFixed(6));
```

___

- 출처: https://dpsc615.tistory.com/119
- 출처: https://nyang-in.tistory.com/195
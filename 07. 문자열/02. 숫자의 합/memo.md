## 다른 풀이

```js
const fs = require('fs');
// const filePath = './07. 문자열/02. 숫자의 합/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sum = Number(
  input[1]
    .split('')
    .map((value) => +value)
    .reduce((prev, curr) => (prev += curr))
);

console.log(sum);
```

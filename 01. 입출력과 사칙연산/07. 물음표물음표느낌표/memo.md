## 주의사항

```js
const fs = require("fs");
const filePath = "./01. 입출력과 사칙연산/10. ??!/input.txt";
const input = fs.readFileSync(filePath).toString();
// const input = fs.readFileSync('/dev/stdin').toString();

console.log(`${input}??!`);
```

위 코드로 로컬(VSCode)에서 확인할 때는 정상적으로 출력이 되지만

동일한 코드로 백준에 제출했을 때는 오류가 난다.

아마도 `input` 마지막에 `개행문자(\n)`이 포함되어 있어서 그런 것 같다.

그러므로 `input` 마지막에 `trim()`을 해주고 백준에 답을 제출하면 정상적으로 정답이 나온다.

## 코드

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(`${input}??!`);
```

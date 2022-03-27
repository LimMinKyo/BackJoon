## 풀이
아래 코드가 어떻게 동작이 되는지 잘 이해가 잘 되지 않는다면

아래 블로그에 있는 그림과 설명을 참고하면 좋을 것 같습니다.

- 참고: https://st-lab.tistory.com/94

## 코드

```js
const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

const Fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return Fibonacci(num - 1) + Fibonacci(num - 2);
};

console.log(Fibonacci(input));
```

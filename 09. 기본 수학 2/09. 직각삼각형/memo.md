## 풀이 및 코드

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

input.forEach((element) => {
  // sort 메서드를 이용하여 숫자를 오름차순으로 정렬해 낮은 숫자가 먼저 오도록 한다.
  const [a, b, c] = element.split(' ').map(value => +value).sort((a, b) => a - b);
  
  // 피타고라스 정리를 이용하여 조건식을 만들고 참이면 right을 거짓이면 wrong을 출력한다.
  a ** 2 + b ** 2 === c ** 2 ? console.log('right') : console.log('wrong');
});
```
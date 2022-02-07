## 다른 풀이

```js
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
  let answer = '';
  
  const [num2, str] = input[i].split(" ");
  
  for (let j = 0; j < str.length; j++) {
    for (let c = 0; c < num2; c++) {
      answer += str[j];
    } 
  }
  
  console.log(answer);
}
```

___

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
  let answer = '';
  
  const [num2, str] = input[i].split(" ");
  
  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(num2);
  }
  
  console.log(answer);
}
```

___

- 출처: https://gurtn.tistory.com/60
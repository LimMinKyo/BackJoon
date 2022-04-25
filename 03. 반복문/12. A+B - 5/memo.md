## 다른 풀이 방법

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let numbers = input[i].split(' ').map(v => v * 1);
    
    console.log(numbers[0] + numbers[1]);
}
```

___

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

while (input[0][0] != 0) {
    const numbers = input.shift().split(" ");
    
    console.log(+numbers[0] + +numbers[1]);
}
```

___

- 참고: https://gurtn.tistory.com/28
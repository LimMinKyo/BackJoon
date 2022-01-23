## 풀이
10개의 줄에 수가 있다. 이 수를 각각 나머지(%)를 사용하여 42를 나눈 나머지를 구해줍니다.

이 값을 userNum이란 배열을 하나 만들어주고 indexOf 메서드를 사용하여 배열안에 값이 있는지 확인하고 없을 시 해당 배열에 나머지를 넣어주고 배열의 길이를 반환해줍니다.

```js
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
});

console.log(userNum.length);
```

___

- 출처: https://gurtn.tistory.com/44
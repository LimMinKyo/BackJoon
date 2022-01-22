## 다른 풀이 방법

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
    let count = 0;
    
    for (let j = 0; j < num.length; j++) {
        if (Number(num[j]) === i) {
            count++;
        }
    }
    
    console.log(count);
}
```

___

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) { 
   console.log(num.split(i + '').length - 1);    
}
```

___

참고: https://gurtn.tistory.com/41

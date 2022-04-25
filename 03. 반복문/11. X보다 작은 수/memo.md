## 다른 풀이 방법

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let inputs = [];
inputs = input[0].split(' ');
// console.log(inputs);  //--> [ '10', '5' ]

let total = Number(inputs[0]);
let limit = Number(inputs[1]);

let numbers = [];
numbers = input[1].split(' ');
// console.log(numbers);  //-->  [ '1', '10', '4', '9', '2', '3', '8', '5', '7', '6' ]

result = '';
for (let i = 0; i < total; i++) {
  if (Number(numbers[i]) < limit) {
    result += numbers[i] + ' ';
  }
}

console.log(result);
```

___

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//첫째 줄의 10, 5를 N, X에 담는다.
let numbers = input[0].split(' ');
let N = Number(numbers[0]); //10
let X = Number(numbers[1]); //5

//둘째 줄의 수열 A
let A = input[1].split(' ');

//결과를 담을 변수
let result= '';

for(let i=0; i<N; i++){
    if(Number( A[i]) < X ){
        result += A[i] + ' ';
    }
}
console.log(result);
```

___

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0].split(' ').map(x => Number(x));
let arr = input[1].split(' ').map(x => Number(x));
const answer = [];

for (let i = 0; i <= num[0]; i++) {
    if (num[1] > arr[i]) {
        answer.push(arr[i]);
    } 
}

console.log(answer.join(' '));
```

___

- 참고: https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-10871%EB%B2%88X%EB%B3%B4%EB%8B%A4-%EC%9E%91%EC%9D%80-%EC%88%98
- 참고: https://velog.io/@yeoni/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-10871-javascript
- 참고: https://gurtn.tistory.com/36
- 참고: https://eunne.tistory.com/21
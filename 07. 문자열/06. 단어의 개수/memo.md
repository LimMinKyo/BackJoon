## 풀이
`split` 메서드를 사용하여 공백을 기준으로 나누고 나눈 배열을 `length` 속성으로 길이를 출력하면 됩니다.

하지만 문제는 `''`값만 들어오는 테스트 케이스가 있습니다.

조건문으로 `''`을 예외처리를 해주면 됩니다.

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
 
console.log(input[0] === "" ? 0 : input.length);
```

___

- 출처: https://gurtn.tistory.com/42
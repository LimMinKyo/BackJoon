## 풀이

첫째줄에는 테스트 케이스의 개수가 있다.

for 문을 돌려 각 배열마다 있는 테스트 케이스를 지정해줍니다.

해당 테스트 케이스에서의 count와 sum을 0으로 지정해주고

해당 배열의 길이를 기준으로 for 문을 돌려줍니다.

나머지 for 문으로 해당 문자열에서 문자를 하나씩 가져와 비교를 해줍니다.

```js
console.log( "ABCD"[1] );

출력 => "B"
```

이때 해당 문자가 "O"이면 count 값을 증가시켜줍니다.

아닐 시에는 count를 다시 0으로 만들어 줍니다.

모든 입력값을 비교한 후 count 값을 계속 누적시켜 결괏값을 출력시켜줍니다.

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    
    sum += count;
  }
  
  console.log(sum);
}
```

___

출처: https://gurtn.tistory.com/40

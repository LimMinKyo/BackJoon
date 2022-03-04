## 풀이
`while`문을 돌려 현재 `N`킬로그램에서 `3`을 계속 빼주면서 조건을 비교해줍니다.

`count`의 수가 늘어난다는 것은 그만큼 봉지를 추가했다는 뜻입니다.

즉 `input`의 값이 `5`로 나누어지는 조건에 일치 할 시 3킬로그램의 경우를 뺀 5킬로그램의 봉지 개수와 <br>
그동안 더한 `count` 즉 3킬로그램 봉지 개수를 더한 수를 출력해줍니다.

만약 킬로그램이 `0` 아래 값이 나올 경우는 정확하게 봉지의 개수를 측정할 수 없으므로 `-1`을 출력합니다.

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin');

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }
    
  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}
```

___

- 출처: https://gurtn.tistory.com/55
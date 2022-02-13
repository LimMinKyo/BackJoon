## 메모
문제를 풀었긴 하지만 아래의 풀이가 더욱 코드가 깔끔하고 좋은 풀이인 것 같으므로 내가 풀었던 방법보다는 아래의 풀이를 이용하는 것이 좋아보인다.

## 풀이
입력되는 `a`와 `b`의 두 수를 거꾸로 뒤집어 `734 => 437` <br>
`a`와 `b`의 수를 비교하여 큰 수를 출력하면 되는 문제입니다.

숫자를 뒤집는 부분은 숫자를 문자열로 만들어 각 자릿수마다 쪼개 배열로 만들어주고 <br>
`reverse` 메서드를 사용하여 배열의 값을 뒤집고 `join` 메서드로 다시 합쳐줍니다.

그후 `삼항 연산자`를 이용해도 되고 `Math.max`를 사용하여 큰 값을 구해줍니다.

## 코드

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

const [a, b] = input.map(v => [...v].reverse().join(''));

console.log(a > b ? a : b);
// console.log(Math.max(a, b));
```

___

- 출처: https://gurtn.tistory.com/71
## BigInt
`BigInt`는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형입니다. 보다 정확히는 `Number` 원시 값이 안정적으로 나타낼 수 있는 최대치인 `2^53 - 1`보다 큰 정수를 표현할 수 있는 내장 객체입니다.

정수 리터럴 끝에 `n`을 붙이거나 함수 `BigInt`를 호출하면 문자열이나 숫자를 가지고 `BigInt` 타입의 값을 만들 수 있습니다.

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // 10n과 동일합니다.
```

`BigInt`와 `Number`는 어떤 면에서 비슷하지만 중요한 차이점이 있습니다. 예컨대 `BigInt`는 내장 `Math` 객체의 메서드와 함께 사용할 수 없고, 연산에서 `Number`와 혼합해 사용할 수 없습니다. 따라서 먼저 같은 자료형으로 변환해야 합니다. 그러나, `BigInt`가 `Number`로 바뀌면 정확성을 잃을 수 있으니 주의해야 합니다.

**또한 BigInt를 출력할 때에는 toString()으로 출력해야합니다. 그렇지 않으면 끝에 n이 붙어서 나오기 때문입니다.**

## 코드

```js
const fs = require('fs');
// const filePath = './08. 기본 수학 1/08. 큰 수 A+B/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const sum = A + B;

console.log(sum.toString());
```

___

- 출처: https://ko.javascript.info/bigint
- 출처: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt

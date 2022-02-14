## 풀이
1. 알파벳을 일일히 적는 것도 괜찮지만 최대한 중복을 줄이기 위해 `charCodeAt` 메서드를 이용하여 알파벳을 아스키코드로 변환하여 조건문을 만들어준다.

2. 그리고 이 조건문을 이용한 `for` 문을 만들어 각 자리의 문자값을 해당 다이얼의 숫자로 바꾸어준다.

3. 그리고 해당 다이얼의 숫자 입력하기 위해 걸리는 시간은 `해당 다이얼의 숫자 + 1`이므로 이를 이용해 전화를 걸기 위해 필요한 최소 시간을 구하면 된다.

## 코드

```js
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `UNUCIC`
)
  .trim()
  .split("");

for (let i = 0; i < input.length; i++) {
  let alphNumber = input[i].charCodeAt();
  alphNumber >= 65 && alphNumber <= 67
    ? (input[i] = 2)
    : alphNumber >= 68 && alphNumber <= 70
    ? (input[i] = 3)
    : alphNumber >= 71 && alphNumber <= 73
    ? (input[i] = 4)
    : alphNumber >= 74 && alphNumber <= 76
    ? (input[i] = 5)
    : alphNumber >= 77 && alphNumber <= 79
    ? (input[i] = 6)
    : alphNumber >= 80 && alphNumber <= 83
    ? (input[i] = 7)
    : alphNumber >= 84 && alphNumber <= 86
    ? (input[i] = 8)
    : alphNumber >= 87 && alphNumber <= 90
    ? (input[i] = 9)
    : 0;
}

let overTime = 1;
let minimumTime = input.map((e) => e + overTime).reduce((a, b) => a + b);

console.log(minimumTime);
```

___

- 출처: https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-5622%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
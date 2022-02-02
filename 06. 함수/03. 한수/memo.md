## 풀이 방법
한수 아닌지 구별할수 있는 배열을 `n + 1` 크기로 만들어준다. (0번인덱스는 0 이기 때문에 +1해줌)

그다음 `for`문을 돌려 한수인지 확인해봄.

100미안 수는 무조건 한수이기 때문에 `continue`로 다 스킵

100이상부턴 한수인지 체크해야함

숫자를 `string`으로 형변환 한 후 자릿수마다 쪼개준다.

10의자리수와 1의 자리수를 빼 공차인 `d`를 구한다.

이후 `for`으로 공차가 `d`인지 확인한다. 만약 공차가 `d`랑 다른게 나오면 `false`를 넣어주고 `break`

그후 `filter`를 사용해 `true`인 것만 골라준 후 길이를 구해서 출력! 하면 틀리고 0도 `true`이기 때문에 0을 빼야하기때문에 - 1을 한 후 출력!

## 코드

```js
let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

const n = +input;

const arr = new Array(n + 1).fill(true);

for (let i = 0; i < n + 1; i++) {
  const numList = String(i).split('');
  if (numList.length < 3) {
    continue;
  } else {
    const d = numList[1] - numList[0];
    for (let j = 1; j < numList.length - 1; j++) {
      if (d !== numList[j + 1] - numList[j]) {
        arr[i] = false;
        break;
      }
    }
  }
}
console.log(arr.filter((is) => is).length - 1);
```

## 다른 풀이 방법

```js
const fs = require("fs");
const [n] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000
`
)
  .trim()
  .split("\n");

let N = Number(n);

let count = 0;

for (let i = 1; i <= N; i++) {
  let nArr = String(i);
  if (i < 100) {
    count++;
    continue;
  }
  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) {
    count++;
  }
}

console.log(count);
```

___

- 출처: https://velog.io/@0r0loo/%EB%B0%B1%EC%A4%80-%ED%95%9C%EC%88%98-1065-JavaScript
- 출처: https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-1065-%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
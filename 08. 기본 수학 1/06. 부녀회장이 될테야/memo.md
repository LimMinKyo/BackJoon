## 풀이
1. 먼저 0층은 `i`호에 `i`명만큼 살기 때문에 `n`호만큼 0층을 설정해준다.
2. `k`층 `n`호에는 `k-1`층 1호 ~ `n`호의 인원수만큼 사는데, <br> `k-1`층 1호 ~ `n-1`호의 인원수는 `k`층 `n-1`호의 인원수와 같다. <br> 따라서 `k`층 `n`호의 인원수는 `k`층 `n-1`호 + `k-1`층 `n`호를 해주면 된다

## 코드

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const k = +input.shift();
  const n = +input.shift();

  // 각 방당 인원수를 저장할 2차원 배열 선언
  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  // 0층 (0층의 i호에는 i명이 산다.)
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  // 1 ~ k층 (k층 n호에는 k-1층 n호 + k층 n-1호만큼 산다.)
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j-1];
    }
  }

  // k층 n호의 인원수 출력
  console.log(house[k][n]);
}
```

___

- 출처: https://velog.io/@hadam/JS-%EB%B0%B1%EC%A4%80-2775-%EB%B6%80%EB%85%80%ED%9A%8C%EC%9E%A5%EC%9D%B4-%EB%90%A0%ED%85%8C%EC%95%BC
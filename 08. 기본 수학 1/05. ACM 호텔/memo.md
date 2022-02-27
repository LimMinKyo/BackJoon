## 풀이
`층수(floor)`를 구하는 공식은 `손님의 수(N)`를 `건물의 높이(H)`로 나눈 나머지의 값, 즉 `N(N번째 손님) % H(건물의 높이)`이다. <br>
이때 `N % H`의 값이 `0`이면 나누어 떨어진다는 의미 이므로 층수는 꼭대기 층인 `H`가 될 것이다.

`방 호수(roomNumber)`를 구하는 공식은 `N(손님의 수) / H(건물의 높이)` 이다. <br>
이때 값이 소수인 경우 예를 들어, `12번째 손님 / 5층은 2.4`라면 방 호수는 `2`가 아니라 `3`에 해당한다. <br>
그러므로 `N / H` 의 값이 소수일 경우 `반올림(Math.ceil)`을 통하여 방 호수를 구해준다.

## 코드

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [H, W, N] = input[i].split(' ').map((value) => +value);
  const floor = N % H === 0 ? H : N % H;
  const roomNumber = Math.ceil(N / H) < 10 ? '0' + Math.ceil(N / H) : Math.ceil(N / H);

  console.log(`${floor}${roomNumber}`);
}
```
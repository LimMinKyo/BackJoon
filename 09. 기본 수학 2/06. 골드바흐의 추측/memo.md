## 풀이

> 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.

이 부분을 만족시키려고 하다보니 많은 시간이 소요되었다.

처음에는 `주어진 수 - 소수`가 소수인지 판별한 뒤 소수라면 바로 출력하였는데, 그럴 경우 두 소수의 차이가 큰 것이 출력되는 문제가 발생하였다.

가능한 골드바흐 파티션을 모두 구해 살펴보았더니, `10`의 경우 `[3, 7], [5, 5], [7, 3]`이 나왔다. 여기서 문제는 `[3, 7]`과 대칭인 `[7, 3]`이었다. 

필요하지 않은 연산을 더 하고 마지막 출력에 어려움을 주었기 때문에 for문의 조건을

```js
for (let j = 0; prime[j] < num / 2 + 1; j++) {
```

로 주어 대칭되는 파티션을 제거하였다. 그랬더니 가장 마지막에 있는 파티션이 두 소수의 차이가 가장 작은 것이었고, 출력할 때 마지막 파티션을 출력해주어 해결하였다.

## 코드

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));

// 2부터 10000까지의 숫자 중 소수 구하기
const n = 2;
const m = 10000;
// 에라토스테네스의 체 사용
let prime = [];
for (let i = n; i <= m; i++) {
  prime[i] = i;
}
for (let i = 2; i <= m; i++) {
  if (prime[i] === 0) continue;
  for (let j = i + i; j <= m; j += i) {
    prime[j] = 0;
  }
}
prime = prime.filter(n => n !== 0);

// 테스트케이스 하나씩 반복
for (let i = 0; i < input.length; i++) {
  // 골드바흐 파티션 구하기
  const num = Number(input[i]);
  // 가능한 골드바흐 파티션을 저장할 배열
  let answer = [];
  // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
  for (let j = 0; prime[j] < num / 2 + 1; j++) {
    // (주어진 수 - 소수)가 소수인지
    const index = prime.indexOf(num - prime[j]);
    // 소수라면
    if (index !== -1) {
      // 골드바흐 파티션이므로 배열에 저장
      answer.push([prime[j], prime[index]]);
    }
  }
  // 골드바흐 파티션이 존재했다면
  if (answer.length !== 0) {
    // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
    const a = answer.pop();
    // 출력
    console.log(`${a[0]} ${a[1]}`);
  }
}
```

___

- 출처: https://velog.io/@hadam/JS-%EB%B0%B1%EC%A4%80-9020-%EA%B3%A8%EB%93%9C%EB%B0%94%ED%9D%90%EC%9D%98-%EC%B6%94%EC%B8%A1

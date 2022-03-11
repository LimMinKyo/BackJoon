## 풀이

- 무식하게 풀 수 있을까?
  
`2` 이상의 자연수 `N`이 소수인지 알아내는 가장 간단한 방법은, `N`을 `2`부터 `N-1`까지의 숫자로 나눠보는 것이다. 만약 `N`이 그 중 하나로라도 나누어떨어진다면 소수가 아니고, 그렇지 않다면 소수이다.

이 방법은 자연수 하나를 검사하는 데에 `O(N)`이 걸리므로, 이 방법으로 알고리즘을 구현하면 시간복잡도가 `O(N^2)`이 되어 입력이 클 때 시간 내에 문제를 풀 수 없다.

- 개선된 소수 판별 알고리즘
  
`2` 이상의 임의의 자연수 `N`의 약수들은, 가운데 약수를 기준으로 곱셈 연산에 대해 대칭을 이룬다. 예를 들어, `16`의 약수는 `1, 2, 4, 8, 16`이고 이때 `2 x 8 = 16`은 `8 x 2 = 16`과 대칭이다. 따라서 자연수의 모든 약수를 찾을 때 가운데 `약수(제곱근)`까지만 확인하면 된다.

위의 무식하게 푸는 방법에서는 `N`을 `2`부터 `N-1`까지의 숫자로 나눴는데, 위의 특성을 이용하면 `N`의 제곱근 이상의 최소 자연수까지만 나눠도 된다는 사실을 알 수 있다. 그렇게 되면 자연수 하나를 검사하는 데에 `O(N^(1/2))`이 걸리게 된다.

- 에라토스테네스의 체

에라토스테네스의 체 알고리즘은 다수의 자연수에 대하여 소수 여부를 판별할 때 사용하는 대표적인 알고리즘이다. 에라토스테네스의 체는 N보다 작거나 같은 모든 소수를 찾을 때 사용할 수 있어 이 문제를 풀기에 적합하다. 에라토스테네스의 체 알고리즘의 구체적인 동작 과정은 다음과 같다.

1. 2부터 N까지의 모든 자연수를 나열한다.
2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다.
3. 남은 수 중에서 i의 배수를 모두 제거한다. (i는 제거하지 않는다.)
4. 더 이상 반복할 수 없을 때까지 2번과 3번의 과정을 반복한다.

이 문제는 `M`이상 `N`이하의 수들의 소수 여부를 출력하면 되기 때문에, 1번에서 2부터가 아니라 `M`부터 소수인지 판별하면 된다. 그리고 3번 과정에 위에서 언급한 개선된 소수 판별 알고리즘을 적용하면 시간복잡도가 `O(N^(3/2))`가 되어 시간 내에 문제를 풀 수 있다.

## 코드

```js
const input = [];

const strToNumArr = (str) => str.split(' ').map(Number);

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [M, N] = strToNumArr(input[0]);
    const isPrimeNumber = Array(N + 1).fill(true);
    isPrimeNumber[1] = false;

    for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
      if (isPrimeNumber[n]) {
        let m = 2;
        while (n * m <= N) {
          isPrimeNumber[n * m] = false;
          m++;
        }
      }
    }

    const results = [];
    for (let n = M; n <= N; n++) {
      if (isPrimeNumber[n]) {
        results.push(n);
      }
    }
    console.log(results.join('\n'));
  });
```

---

- 출처: https://gywlsp.github.io/boj/1929/

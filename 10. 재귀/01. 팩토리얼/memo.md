## 재귀 함수
함수가 자기 자신을 호출하는 것을 `재귀 호출(recursive call)`이라 한다. `재귀 함수(recursive function)`는 자기 자신을 호출하는 행위, 즉 `재귀 호출`을 수행하는 함수를 말한다.

`재귀 함수`는 반복되는 처리를 위해 사용한다.

```javascript
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10);
```

위 `countdown 함수`는 문제없이 잘 동작한다. 하지만 `반복문` 없이도 구현할 수 있는 방법이 있다. 바로 `재귀함수`를 사용하는 것이다.

```javascript
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1); // 재귀 호출
}
countdown(10);
```

이처럼 자기 자신을 호출하는 `재귀 함수`를 사용하면 반복되는 처리를 `반복문` 없이 구현할 수 있다. 예를 들어, `팩토리얼`은 `재귀 함수`로 간단히 구현할 수 있다.

```javascript
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 1 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

`factorial 함수` 내부에서 자기 자신을 호출할 때 사용한 `식별자 factorial`은 `함수 이름`이다. 함수 이름은 함수 몸체 내부에서만 유효하다. 따라서 함수 내부에서는 함수 이름을 사용해 자기 자신을 호출할 수 있다. `함수 표현식`으로 정의한 함수 내부에서는 `함수 이름`은 물론 함수를 가리키는 `식별자`로도 자기 자신을 `재귀 호출`할 수 있다. 단, 함수 외부에서 함수를 호출할 때는 반드시 함수를 가리키는 `식별자`로 해야 한다.

```javascript
// 함수 표현식
var factorial = function foo(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
  return n * factorial(n - 1);
  // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
  // console.log(factorial === foo); // true
  // return n * foo(n - 1);
};
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

`재귀 함수`는 자신을 `무한 재귀 호출`한다. **따라서 `재귀 함수` 내에는 재귀 호출을 멈출 수 있는 `탈출 조건`을 반드시 만들어야 한다.** 위 예제의 경우 인수가 1 이하일 때 `재귀 호출`을 멈춘다. `탈출 조건`이 없으면 함수가 무한 호출되어 `스택 오버플로(stack overflow) 에러`가 발생한다.

대부분의 `재귀 함수`는 `for 문`이나 `while 문`으로 구현 가능하다.

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  var res = n;
  while (--n) res *= n;
  return res;
}
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 1 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

**`재귀 함수`는 반복되는 처리를 `반복문` 없이 구현할 수 있다는 장점이 있지만 무한 반복에 빠질 위험이 있고, 이로 인해 `스택 오버플로 에러`를 발생시킬 수 있으므로 주의해서 사용해야 한다. 따라서 `재귀 함수`는 `반복문`을 사용하는 것보다 `재귀 함수`를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다.**

___

- 출처: 책 '모던 자바스크립트 Deep Dive'

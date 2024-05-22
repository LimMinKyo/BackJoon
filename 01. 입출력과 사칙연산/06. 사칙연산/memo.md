이번 문제는 그리 어렵지 않았다.
다만, 나눗셈(/)은 조금 신경 써야 한다.
다른 언어와는 달리 JS에서의 나눗셈 연산은 소수점을 포함한 결과가 나온다.

즉, 7을 3으로 나눈 결과는 2.3333333333333335가 나온다.
예제 출력은 정수만 출력되므로 소수점 아래 수를 없애주어야 한다.
따라서 Math객체의 floor메소드를 이용해 소수점 이하의 자리는 '버림' 해야한다.

Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
```js
// 예시

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
```
- 참고: https://velog.io/@exploit017/10869-%EC%82%AC%EC%B9%99%EC%97%B0%EC%82%B0
- 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
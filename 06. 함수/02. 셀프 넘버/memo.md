## 풀이
[0~10000]수의 배열을 만들고 생성자가 있는 수를 구한 다음,

<br> 

[0~10000] 에서 생성자가 있는 수를 걸러내고 생성자가 없는 수인 셀프 넘버를 출력하는 방식으로 풀었는데 합격은 했으나 메모리 소비가 굉장히 심했다.

<br> 

다른 풀이를 참고하여

<br> 

[0~10000]의 배열을 생성하여 전부 true를 넣어주고 셀프넘버가 아닌 수만 false로 바꿔 준 다음

<br> 

true인 인덱스만 출력하는 방식으로 바꾸니 메모리 소비를 현저히 줄일 수 있었다.

## 코드

```js
function d(n) {
  let number = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
    result += number % 10;
    number = Math.floor(number / 10);
  }
  // 입력받은 수 와 result를 더하여 return
  return n + result;
}

const range = 10000;
// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  // 셀프넘버가 아니면 false로 변환.
  selfNumbers[d(i)] = false;
}

// true index만 출력
for (let i = 0; i < range; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}
```

___

출처: https://laycoder.tistory.com/185
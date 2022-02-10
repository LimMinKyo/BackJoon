## 풀이
처음에는 `for` 문을 여러 개 사용하여 풀이를 하니 시간 초과가 나와버렸습니다. 그래서 최대한 `for` 문을 줄이는 방향으로 다시 풀이해보았습니다. <br>
charCodeAt 메서드는 해당 인덱스에 대한 UTF-16 코드를 반환합니다.

```js
"a".charCodeAt(0) === 97
```

이 것을 이용하여 a-z까지의 배열을 만들어 0을 채워주고 각 반환된 코드에서 `a = 최솟값(97)`을 빼주어 <br> 
배열 인덱스를 잡아주고 해당 배열의 값을 1 증가시켜줍니다. 입력값의 길이만큼을 반복합니다.

그 후 처음에는 `for` 문을 사용했던 max값을 `Math.max` 메서드로 구할 수 있는 구조가 되었고 <br>
`indexOf` 메서드로 max값이 위치한 배열의 index값을 구하고 <br>
다시 한번 a-z의 수만큼을 `for` 문을 돌려 해당 인덱스 값과 max값 그리고 중복을 막기 위한 index 값 비교를 통한 <br>
중복 값이 있는지 확인해주고 중복되는 값이 있을 시 출력을 `"?"`로 해주기 위해 `isSame`을 `true`로 바꿔줍니다.

출력 문에서 만약 중복되는 값이 있었다면 `"?"`을 출력해주고 아닐 시 <br>
`String.fromCharCode` 메서드를 사용하여 해당 index 값에서 65를 더한 값을 (65 부터 "A") 문자열로 생성해 반환합니다.

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
```

___

- 출처: https://gurtn.tistory.com/49
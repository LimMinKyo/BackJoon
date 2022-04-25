**저도 아래와 같은 문제를 겪어서 해결에 도움이 되었던 글을 메모에 남깁니다.**

## 질문

while문의 조건으로 왜 `idx < input.length`가 아닌 `idx < input.length - 1`로 설정해야 하는지 이해가 잘 되지 않습니다.

만약 input에 5줄의 내용이 입력 됐다면 `input.length`는 5입니다.

`idx` 변수를 0으로 초기화 했고 `input`의 5개를 모두 출력하려면 `idx < input.length`로 조건을 걸어야 `idx` 인덱스를 `0, 1, 2, 3, 4` 이렇게 올려가면서 `input`의 5개를 모두 출력할 수 있을텐데 왜 `idx < lnput.length - 1`로 해야하는지 잘 모르겠습니다.

```js
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

let idx = 0

while (idx < input.length - 1) {
  nums = input[idx].split(" ")
  console.log(parseInt(nums[0]) + parseInt(nums[1]))
  idx += 1
}
```

## 답변

```js
a = "1 1\n2 3\n3 3\n4 5\n6 7\n7 8"

b = "1 1\n2 3\n3 3\n4 5\n6 7\n7 8\n"
```

형태로 테스트 해본 결과 

```js
a.split('\n')
(6) ["1 1", "2 3", "3 3", "4 5", "6 7", "7 8"]

b.split('\n')
(7) ["1 1", "2 3", "3 3", "4 5", "6 7", "7 8", ""]
```

으로 나옵니다.

아무래도 테스트 케이스 마지막부분에 `\n` 이 하나더 추가되어 있나보네요
이러한 문제는 `b.trim().split('\n')` 으로 해주시면

`length-1` 을 안해주셔도 됩니다.

___

- 출처: https://www.acmicpc.net/board/view/59328

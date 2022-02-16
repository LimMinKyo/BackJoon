## 풀이
`letter` 배열은 처음 발견된 글자를 넣는 곳이다.

탐색한 글자가 `letter` 배열에 존재할 경우,

해당 인덱스가 `letter` 배열의 마지막 요소가 아니라면

이전에 탐색되었으나, 다른 처음 발견된 글자 탐색 후 다시 발견된 경우이므로

그룹 단어에서 제외하고, 결괏값을 담는 변수인 `countGroupWord`에 카운트 하지 않았다.

## 코드

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= caseCount; i++) {
  const word = input[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);
```

___

- 출처: https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-1316%EB%B2%88-%EA%B7%B8%EB%A3%B9-%EB%8B%A8%EC%96%B4-%EC%B2%B4%EC%BB%A4
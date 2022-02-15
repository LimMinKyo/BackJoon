## 풀이
1. `split` 메서드를 이용하면 인수로 받은 문자열은 없어지고 이를 기준으로 나뉘어진 배열을 얻을 수 있다. 이러한 `split` 메서드의 특징을 활용하여 크로아티아 알파벳에 해당하는 부분을 없애고 이를 기준으로 나뉘어진 배열을 만든다. 

2. 나뉘어진 배열을 다시 `join` 메서드를 이용하여 배열을 문자열로 만들 때, 연결문자로 한자리 문자열을 이용하면 크로아티아 알파벳에 해당하는 문자를 한자리 문자로 바꿀 수 있다.

3. 그러고나서 `input`의 문자열의 길이를 출력해주면 문제의 정답이 출력된다.

## 코드

```js
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < croatia.length; i++) {
  input = input.split(croatia[i]).join('@');
}

console.log(input.length);
```

___

- 참고: https://jb-dailylife.tistory.com/entry/%EB%B0%B1%EC%A4%80-nodejs-2941%EB%B2%88-%ED%81%AC%EB%A1%9C%EC%95%84%ED%8B%B0%EC%95%84-%EC%95%8C%ED%8C%8C%EB%B2%B3
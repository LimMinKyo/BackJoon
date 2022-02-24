## 풀이
1. 분자값으로만 보자면 이 전 값에 순서대로 `1,2,3,4....`를 더해가는 것을 볼 수 있다. 그 증가분은 `라인넘버`와 일치한다.

2. 분자만 봤을 때 라인넘버 `짝수`를 기준으로는 **순방향**으로, `홀수`는 기준으로는 **역방향**으로 숫자가 나열되고 있다.

3. 각 라인의 합계액은 해당라인에 존재할 수 있는 N의 값의 `최대값`이 되고, `최대값`에서 `증가분(라인넘버)`를 빼면 해당라인 N의 `최소값(1부터 시작했을 때 인덱스 넘버 0)`이 된다. 따라서, `주어진 수(input)`에서 `최소값`을 차감하게 되면 그 수가 바로 해당라인에서 주어진 수가 존재하는 `위치번호`가 된다.(1부터 시작했을 때 인덱스 넘버)

4. 2번에서 말했듯이 `라인넘버`가 `짝수`인지 `홀수`인지에 따라서 분자값을 산출하는 로직이 다르기에 조건으로 나눠서 각각 조건에 맞도록 넣어준다.

## 코드

```js
let fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString().map(el=>+el);

let line = 0;
let maxValue = 0;

//N의 범위의 최대값이 나올 때 까지
while (maxValue < N) {
  line++
  maxValue += line;
}


let idx = N - (maxValue - line);

if (line % 2 == 0) {
  child = idx;
  parents =  (line + 1) - child;
} else {
  child = (line + 1) - idx;
  parents = (line + 1) - child;
}

console.log( child + '/' + parents);
```

___

- 출처: https://eunne.tistory.com/48
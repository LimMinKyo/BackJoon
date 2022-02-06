## 메모
문제에 대한 풀이 접근방식은 맞았으나 나는 일일히 알파벳 배열을 직접 적었고

아래의 풀이는 `for`문을 이용할 때 `String.fromCharCode` 메서드를 이용하여 알파벳을 손쉽게 생성하였다.

**이 문제는 아래와 같은 방법으로 문제를 푸는 것을 의도한 것 같으므로 아래와 같은 방법으로 푸는 것이 더 효율적이고 올바른 정답이라고 생각한다.**

## 풀이
알파벳 a 부터 z 까지를 `for` 문을 돌릴 때 각 알파벳을 해당 'a'는  97번이고, 'z'는 122번이기 때문에 97-122까지

반복 실행하고 이 값을 `String.fromCharCode` 메서드를 사용하여 알파벳을 생성하여 `indexOf` 메서드를 사용하여 

만약에 값이 있다면 그 값의 `index`를 없다면 `-1`을 출력한 값을 출력해줍니다.

이 때 `join`을 사용하여 출력 형식을 맞춰주었습니다.

## 코드

```js
const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
```

___

- 출처: https://gurtn.tistory.com/48
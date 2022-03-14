## 풀이
문제를 쉽게 풀어서 설명한다면

**"직사각형 내부에 있는 점 (x,y)에서 직사각형의 변까지의 최소 거리"** 를 구하는 문제이다.

결국 최솟값을 찾으면 되는 문제이다. 무엇중에 최소값을 구하는지만 생각하면 해결된다.

사각형이니까 변이 4개, 우리에게 주어진 점은 1개`(x, y)`

**그렇다면 `(x, y)`에서 사각형 각 변까지의 거리 총 4개를 구하고 그중에 최솟값을 취하면 된다.**

## 코드

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [x, y, w, h] = input;

//w, h 는 x, y보다 크기 떄문에 항상 양수
const answer = [x, y, w-x, h-y];

// 네개의 변수 중 최소값이 문제에서 하는 최소 거리이다.
console.log(Math.min(...answer));
```

___

- 출처: https://chunghyup.tistory.com/56
- 출처: https://nyang-in.tistory.com/193
## 메모
아래와 같이 코드를 만들었을 때 콘솔에 정답은 잘 출력되었지만 제출했을 때 시간초과가 나온다.

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [A, B, V] = input;

let day = 1;
let height = 0;

while (true) {
  height += A;
  if (height < V) {
    height -= B;
    day++;
  }
  if (height >= V) {
    console.log(day);
    break;
  }
}
```

그래서 시간초과가 나지 않는 풀이는 아래와 같다.

## 풀이
단순히 반복문을 돌려 해결할 수도 있지만 시간 복잡도 때문에 시간 초과가 나게 됩니다. <br>
그에 간단한 계산식을 만들어 보면

정상에 도착하면 미끄러지지 않고 그 즉시 끝나게 되니 정상(높이)에서 밤에 미끄러지는 수를 빼주면 됩니다. <br>
즉 **(높이 - 밤에 미끄러지는 수)** 값까지 만 올라가면 됩니다.

그리고 아침에는 위로 이동을 하지만 밤에는 미끄러지니 결국 하루에 이동하는 값은 <br>
**(아침에 이동하는 수 - 밤에 미끄러지는 수)**가 될 것입니다.

결과 값이 딱 떨어지지 않는 수가 나오면 하루가 더 필요하다는 뜻이므로 <br>
`Math.ceil` 메서드를 사용해 올림을 해서 하루를 더해줍니다.

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0];
const B = input[1];
const V = input[2];
 
console.log(Math.ceil((V - B) / (A - B)));
```

___

- 출처: https://gurtn.tistory.com/52
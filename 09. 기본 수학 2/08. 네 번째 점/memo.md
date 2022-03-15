## 풀이

**축에 평행한 직사각형의 경우 세 점이 주어지면 나머지 한 점은 x좌표는 나머지 세점에서 한 번 밖에 등장하지 않은 x좌표이고, y좌표는 나머지 세 점에서 한 번 밖에 등장하지 않은 y좌표가 된다.**

예제 입력 2을 가지고 예를 들면 `(30,20) (10,10) (10,20)` 이 주어지면<br>
세 점의 x좌표를 한 배열에 담는다. `arrayX = [30, 10, 10]` <br>
세 점의 y좌표를 한 배열에 담는다. `arrayY = [20, 10, 20]` <br>
`sort` 메소드를 이용해 x좌표를 담은 배열과 y좌표를 담은 배열을 정렬한다.

```js
arrayX = [10,10,30]

arrayY = [10,20,20]
```

x좌표의 경우 10이 2번 등장했고 30은 1번만 등장했으므로 네번째 점의 x좌표는 30이 된다. <br>
y좌표의 경우 10이 1번만 등장했고 20은 2번 등장했으므로 네번째 점의 y좌표는 10이 된다. 

네번째 점의 x좌표와 y좌표를 구해내려면 어떤 요소가 1개인지 알아내야 하는데, 비교할 숫자가 갯수가 많지 않기 때문에 굳이 각 요소를 반복문으로 돌면서 개수를 카운트할 필요 없이,<br>
**그냥 배열을 정렬한 후 삼항연산자를 사용하여 배열의 첫번째 요소와 두번째 요소가 같은지 비교하고 참이면 세번째 요소가 답이 되고 거짓이면 첫번째요소가 답이 된다.**

## 코드

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let arrayX = [];
let arrayY = [];
let x;
let y;
for(let i = 0; i < 3; i++){
    arrayX.push(Number(input[i].split(" ")[0]));
    arrayY.push(Number(input[i].split(" ")[1]));
}
arrayX = arrayX.sort();
arrayy = arrayY.sort();

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);
```

___

- 출처: https://nyang-in.tistory.com/194
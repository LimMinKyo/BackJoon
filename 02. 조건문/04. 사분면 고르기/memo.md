풀이를 알맞게 썼는데 당황했다... <br>

알아보니 이 문제는 fs 모듈을 사용하는 경우 런타임 에러 발생한다 <br>
fs 모듈 대신에 readline 모듈을 사용하면 '런타임 에러'는 사라진다.

IF문 문제를 순서대로 풀어보고 있었는데 여기 문제부터 fs모듈에 런타임 에러가 나서 통하지 않는다. <br>
이 문제는 readline 모듈을 써야한다. 아무래도 되도록이면 계속 readline 모듈로 써야할 수도 있을 것 같다.

- fs 모듈 사용

```js
// console.log(process.cwd());
const fs = require('fs');
// const filePath = "./02. if문/04. 사분면 고르기/input.txt"
// const inputData = fs.readFileSync(filePath).toString().split('\n').map(value => +value);
const inputData = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((value) => +value);
const x = inputData[0];
const y = inputData[1];

if (x > 0 && y > 0) {
  // x 가 양수 y가 양수이면 1사분면
  console.log(1);
} else if (x < 0 && y > 0) {
  // x 가 음수 y가 양수이면 2사분면
  console.log(2);
} else if (x < 0 && y < 0) {
  // x 가 음수 y가 음수이면 3사분면
  console.log(3);
} else if (x > 0 && y < 0) {
  // x 가 양수 y가 음수이면 4사분면
  console.log(4);
}
```

- readline 모듈 사용

```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }

  process.exit();
});
```

- 다른 풀이 방법

```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const x = input[0];
  const y = input[1];

  if (x > 0) {
    y > 0 ? console.log(1) : console.log(4);
  }
  if (x < 0) {
    y > 0 ? console.log(2) : console.log(3);
  }

  process.exit();
});
```

- 참고: https://helicopter55.tistory.com/50
- 참고: https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-14681%EB%B2%88-JavaScript

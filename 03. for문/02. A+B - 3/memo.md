- 다른 풀이

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(' ');

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
```

- readline 풀이

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  /*

    5	      [ '5', [ '1 1' ], [ '2 3' ]
    1 1            , [ '3 4' ], [ '9 8' ], [ '5 2' ] ]
    2 3
    3 4
    9 8
    5 2

    */
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    let num1 = Number(input[i].split(' ')[0]);
    let num2 = Number(input[i].split(' ')[1]);

    console.log(num1 + num2);
  }

  process.exit();
});
```

- 참고: https://gurtn.tistory.com/27
- 참고: https://laycoder.tistory.com/158

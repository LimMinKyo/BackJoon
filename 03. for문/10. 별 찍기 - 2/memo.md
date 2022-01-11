## 다른 풀이 방법

```js
let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
  let star = '';
    
  for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}
```

___

```js
let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

let star = new Array(num).fill(' ');

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  
  console.log(star.join('')); 
}
```

___

```js
const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5`
)
  .trim()
  .split("\n");

let stars = "";
let answer = "";

// Array.length를 응용
for (let i = 1; i <= n; i++) {
  stars += "*";
  let air = " ".repeat(n - stars.length);
  answer += `${air}${stars}` + "\n";
}
//////////////////////////////////

// or slice()
let air = " ".repeat(n);

for (let i = 1; i <= n; i++) {
  stars += "*";
  air = air.slice(1);
  answer += `${air}${stars}` + "\n";
}
//////////////////////////////////

console.log(answer);
```

___

```js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const num = +line;

    // 1번 ==============================================================

    // star = [' ',' ',' ',' ',' ']
    let star = new Array(num).fill(' ');

    for (let i = num - 1; i >= 0; i--) {
        star[i] = '*';
        console.log(star.join(''));
    }

    // =================================================================

    // 2번 ==============================================================

    let star = '';
    let blank = '';

    // i -> 1,2,3,4,5
    for (let i = 1; i <= num; i++) {
        star += '*';
        // num - i -> 4,3,2,1,0
        for (let j = 0; j < num - i; j++) {
            blank += ' ';
        }
        console.log(blank + star);
        blank = '';
    }

    // =================================================================

    rl.close();
}).on('close', function () {
    process.exit();
});
```

- 참고: https://gurtn.tistory.com/33
- 참고: https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-2439%EB%B2%88-JavaScript-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
- 참고: https://laycoder.tistory.com/167
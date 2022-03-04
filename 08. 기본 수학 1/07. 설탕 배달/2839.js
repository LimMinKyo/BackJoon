const fs = require('fs');
// const filePath = './08. 기본 수학 1/07. 설탕 배달/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

let N = input;
let count = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  }

  if (N < 0) {
    console.log(-1);
    break;
  }

  N -= 3;
  count++;
}

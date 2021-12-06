// console.log(process.cwd());
const fs = require('fs');
// const filePath = './02. if문/05. 알람 시계/input.txt';
// const inputData = fs.readFileSync(filePath).toString().split(' ').map((value) => +value);
// const inputData = fs.readFileSync("/dev/stdin").toString().split(' ').map(value => +value);
let H = inputData[0];
let M = inputData[1];

if (M - 45 < 0) {
  // M - 45 < 0 이면 H - 1, (M + 60) - 45
  H = H - 1;
  M = M + 60 - 45;
  if (H === -1) {
    // H - 1 === -1 이면 H = 23
    H = 23;
  }
} else {
  // M - 45 > 0 면 M - 45
  M = M - 45;
}

console.log(H + ' ' + M);

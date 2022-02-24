const fs = require('fs');
// const filePath = './08. 기본 수학 1/03. 분수찾기/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

let X = input;

let line = 0;
let maxValue = 0;

//N의 범위의 최대값이 나올 때 까지
while (maxValue < X) {
  line++
  maxValue += line;
}

const idx = X - (maxValue - line);

if (line % 2 == 0) {
  child = idx;
  parents =  (line + 1) - child;
} else {
  child = (line + 1) - idx;
  parents = (line + 1) - child;
}

console.log(child + '/' + parents);

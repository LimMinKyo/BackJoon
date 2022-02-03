const fs = require('fs');
// const filePath = './07. 문자열/02. 숫자의 합/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let sum = 0;

for(let i = 0; i < N; i++){
  sum += Number(input[1][i]);
}

console.log(sum);

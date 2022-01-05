const fs = require('fs');
// const filePath = './03. for문/07. A+B - 7/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]);

for(let i = 1; i <= T; i++){
  const A = parseInt(input[i].split(' ')[0]);
  const B = parseInt(input[i].split(' ')[1]);
  console.log(`Case #${i}: ${A+B}`);
}
const fs = require('fs');
// const filePath = './03. for문/08. A+B - 8/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(input[0]);

for(let i = 1; i <= T; i++){
  const [A, B] = input[i].split(' ').map(value => +value);
  
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]);

for(let i = 1; i <= T; i++){
  const A = parseInt(input[i].split(' ')[0]);
  const B = parseInt(input[i].split(' ')[1]);
  console.log(`Case #${i}: ${A+B}`);
}
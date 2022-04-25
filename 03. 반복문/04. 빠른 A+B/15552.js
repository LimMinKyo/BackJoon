const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(inputData[0]);
let answer = '';

for(i = 1; i <= T; i++){
  const num = inputData[i].split(' ');
  answer += parseInt(num[0]) + parseInt(num[1]) + '\n';
}

console.log(answer);
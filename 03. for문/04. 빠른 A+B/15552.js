const fs = require('fs');
// const filePath = "./03. for문/04. 빠른 A+B/input.txt";
// const inputData = fs.readFileSync(filePath).toString().split('\n');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(inputData[0]);
let answer = '';

for(i = 1; i <= T; i++){
  const num = inputData[i].split(' ');
  answer += parseInt(num[0]) + parseInt(num[1]) + '\n';
}

console.log(answer);
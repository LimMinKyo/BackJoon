const fs = require('fs');
// const filePath = './03. for문/05. N 찍기/input.txt'
// const input = parseInt(fs.readFileSync(filePath).toString());
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let answer = '';

for(let i = 1; i <= input; i++){
  answer += i + '\n';
}

console.log(answer);
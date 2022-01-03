const fs = require('fs');
// const filePath = './03. for문/06. 기찍 N/input.txt';
// const input = parseInt(fs.readFileSync(filePath).toString());
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let answer = '';

for(let i = input; i >= 1; i-- ) {
  answer += i + '\n';
}

console.log(answer);

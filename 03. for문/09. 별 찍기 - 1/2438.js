const fs = require('fs');
// const filePath = './03. for문/09. 별 찍기 - 1/input.txt';
// const input = parseInt(fs.readFileSync(filePath).toString());
const input = parseInt(fs.readFileSync('/dev/stdin').toString());
const N = input;

let star = '';

for(let i = 1; i <= N; i++){
  star += '*';
  console.log(star);
}
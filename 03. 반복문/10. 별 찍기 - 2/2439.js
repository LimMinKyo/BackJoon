const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());
const N = input;

let star = '';

for(let i = 1; i <= N; i++){
  // 공백 채우기
  for(let j = 1; j <= N - i; j++){
    star += ' ';
  }
  // 별 찍기
  for(let k = 1; k <= i; k++){
    star += '*';
  }
  // 줄바꿈
  star += '\n';
}

console.log(star);

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let answer = '';

for(let i = input; i >= 1; i-- ) {
  answer += i + '\n';
}

console.log(answer);

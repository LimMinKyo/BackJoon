const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());
const N = input;

let star = '';

for(let i = 1; i <= N; i++){
  star += '*';
  console.log(star);
}
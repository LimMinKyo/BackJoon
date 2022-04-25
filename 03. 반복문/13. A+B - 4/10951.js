const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;

while(i < input.length){
  const [A, B] = input[i].split(' ').map(value => +value);
  console.log(A+B);
  i++
}
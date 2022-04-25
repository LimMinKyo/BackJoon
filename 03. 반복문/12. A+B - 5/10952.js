const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while(true){
  const [A, B] = input[i].split(' ').map(value => +value);
  if(A === 0 && B === 0){
    break;
  }
  console.log(A + B);
  i++
}

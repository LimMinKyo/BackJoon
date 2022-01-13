const fs = require('fs');
// const filePath = './04. while문/01. A+B - 5/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
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

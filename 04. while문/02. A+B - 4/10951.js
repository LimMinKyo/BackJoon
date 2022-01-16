const fs = require('fs');
// const filePath = './04. while문/02. A+B - 4/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;

while(i < input.length){
  const [A, B] = input[i].split(' ').map(value => +value);
  console.log(A+B);
  i++
}
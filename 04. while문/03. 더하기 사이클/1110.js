const fs = require('fs');
// const filePath = './04. while문/03. 더하기 사이클/input.txt';
// const input = parseInt(fs.readFileSync(filePath).toString());
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let num = input;
let sum;
let count = 0;

while(true){
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10 * 10) + (sum % 10);

  count++

  if(num === input){
    break;
  }
}

console.log(count);
const fs = require('fs');
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
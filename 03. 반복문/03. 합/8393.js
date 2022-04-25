const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(inputData);

let sum = 0;
for(i = 1; i <= n; i++){
  sum = sum + i;
}

console.log(sum);
// console.log(process.cwd());
const fs = require('fs');
// const filePath = "./03. for문/03. 합/input.txt";
// const inputData = fs.readFileSync(filePath).toString();
const inputData = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(inputData);

let sum = 0;
for(i = 1; i <= n; i++){
  sum = sum + i;
}

console.log(sum);
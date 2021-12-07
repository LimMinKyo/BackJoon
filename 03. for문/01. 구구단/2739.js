const fs = require('fs');
// const filePath = "./03. for문/01. 구구단/input.txt";
// const inputData = parseInt(fs.readFileSync(filePath).toString());
const inputData = parseInt(fs.readFileSync("/dev/stdin").toString());
const a = inputData;

for(N = 1; N <= 9; N++){
  console.log(`${a} * ${N} = ${a * N}`);
}
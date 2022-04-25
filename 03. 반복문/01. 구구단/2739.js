const fs = require('fs');
const inputData = parseInt(fs.readFileSync("/dev/stdin").toString());
const a = inputData;

for(N = 1; N <= 9; N++){
  console.log(`${a} * ${N} = ${a * N}`);
}
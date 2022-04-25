const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split('\n').map(value => value.split(' '));
const T = parseInt(inputData[0][0]);

for(i = 1;i <= T; i++){
  let A = parseInt(inputData[i][0]);
  let B = parseInt(inputData[i][1]);

  console.log(A+B);
}

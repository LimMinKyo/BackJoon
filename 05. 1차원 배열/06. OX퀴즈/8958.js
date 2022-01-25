const fs = require('fs');
// const filePath = './05. 1차원 배열/06. OX퀴즈/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for(let i = 1; i <= T; i++){
  let count = 0;
  let sum = 0;

  for(let j = 0; j < input[i].length; j++){
    if(input[i][j] === "O"){
      count++;
    } else {
      count = 0;
    }

    sum += count;
  }

  console.log(sum);
}

const fs = require('fs');
// const filePath = './05. 1차원 배열/03. 숫자의 개수/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(value => +value);

const result = String(input[0] * input[1] * input[2]);
let numCount = [];

// numCount 초기값 세팅
for(let i = 0; i < 10; i++){
  numCount.push(0);
}

// 숫자의 개수 구하기
for(let i = 0; i < result.length; i++){
  const num = result[i];
  numCount[num]++;
}

// 숫자의 개수 출력하기
for(let i = 0; i < numCount.length; i++){
  console.log(numCount[i]);
}

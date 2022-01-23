const fs = require('fs');
// const filePath = './05. 1차원 배열/04. 나머지/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(value => +value);

const remainder = [];

input.forEach(x => {
  const num = x % 42;

  if(remainder.indexOf(num) === -1){
    remainder.push(num);
  }
});

console.log(remainder.length);

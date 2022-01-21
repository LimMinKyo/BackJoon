const fs = require('fs');
// const filePath = './05. 1차원 배열/02. 최댓값/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(value => +value);

const max = Math.max(...input);
const ArrayIndex = input.findIndex(value => value === max);
const index = ArrayIndex + 1;

console.log(max);
console.log(index);
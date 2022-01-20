const fs = require('fs');
// const filePath = './05. 1차원 배열/01. 최소, 최대/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const array = input[1].split(' ').map(value => +value);

const min = Math.min(...array);
const max = Math.max(...array);

console.log(min, max);

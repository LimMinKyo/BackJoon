const fs = require('fs');
// const filePath = './08. 기본 수학 1/01. 손익분기점/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [A, B, C] = input;

const margin = C - B;
const count = Math.floor(A / margin) + 1;

console.log(margin > 0 ? count : -1);
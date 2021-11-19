// console.log(process.cwd());
const fs = require('fs');
// const filePath = './01. 입출력과 사칙연산/06. A-B/input.txt'
// const input = fs.readFileSync(filePath).toString().split(' ');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A-B);
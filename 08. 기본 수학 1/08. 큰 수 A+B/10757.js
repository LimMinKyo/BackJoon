const fs = require('fs');
// const filePath = './08. 기본 수학 1/08. 큰 수 A+B/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const sum = A + B;

console.log(sum.toString());

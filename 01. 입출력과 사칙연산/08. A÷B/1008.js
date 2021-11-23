const fs = require('fs');
// const filePath = "./01. 입출력과 사칙연산/08. A÷B/input.txt";
// const input = fs.readFileSync(filePath).toString().split(' ').map(val => +val);
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(val => +val);
const A = input[0];
const B = input[1];
console.log(A/B);
const fs = require('fs');
// const filePath = './07. 문자열/07. 상수/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = input[0];
const num2 = input[1];

let reverse1 = '';
let reverse2 = '';

for (let i = 2; i >= 0; i--) {
  reverse1 += num1[i];
  reverse2 += num2[i];
}

console.log(reverse1 > reverse2 ? reverse1 : reverse2);

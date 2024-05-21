const fs = require("fs");
// const filePath = './01. 입출력과 사칙연산/11. 1998년생인 내가 태국에서는 2541년생?!/input.txt';
// const input = parseInt(fs.readFileSync(filePath).toString());
const input = parseInt(fs.readFileSync("/dev/stdin").toString());

console.log(input - 543);

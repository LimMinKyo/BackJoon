const fs = require('fs');
// const filePath = './01. 입출력과 사칙연산/10. ??!/input.txt';
// const input = fs.readFileSync(filePath).toString().trim();
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(`${input}??!`);
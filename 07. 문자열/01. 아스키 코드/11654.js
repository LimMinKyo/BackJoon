const fs = require('fs');
// const filePath = './07. 문자열/01. 아스키 코드/input.txt';
// const input = fs.readFileSync(filePath).toString();
const input = fs.readFileSync('/dev/stdin').toString();

console.log(input.charCodeAt(0));
const fs = require('fs');
// const filePath = './07. 문자열/08. 다이얼/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

for (let i = 0; i < input.length; i++) {
  let codeNumber = input[i].charCodeAt();
  codeNumber >= 65 && codeNumber <= 67
    ? (input[i] = 2)
    : codeNumber >= 68 && codeNumber <= 70
    ? (input[i] = 3)
    : codeNumber >= 71 && codeNumber <= 73
    ? (input[i] = 4)
    : codeNumber >= 74 && codeNumber <= 76
    ? (input[i] = 5)
    : codeNumber >= 77 && codeNumber <= 79
    ? (input[i] = 6)
    : codeNumber >= 80 && codeNumber <= 83
    ? (input[i] = 7)
    : codeNumber >= 84 && codeNumber <= 86
    ? (input[i] = 8)
    : codeNumber >= 87 && codeNumber <= 90
    ? (input[i] = 9)
    : 0;
}

const overTime = 1;
let minimumTime = input.map((item) => item + overTime).reduce((a, b) => a + b);

console.log(minimumTime);

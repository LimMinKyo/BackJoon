const fs = require('fs');
// const filePath = './10. 재귀/01. 팩토리얼/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

const factorial = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(input));

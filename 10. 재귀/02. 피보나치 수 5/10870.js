const fs = require('fs');
// const filePath = './10. 재귀/02. 피보나치 수 5/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

const Fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return Fibonacci(num - 1) + Fibonacci(num - 2);
};

console.log(Fibonacci(input));

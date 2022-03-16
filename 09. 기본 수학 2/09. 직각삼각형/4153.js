const fs = require('fs');
// const filePath = './09. 기본 수학 2/09. 직각삼각형/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

input.forEach((element) => {
  const [a, b, c] = element.split(' ').map(value => +value).sort((a, b) => a - b);
  
  a ** 2 + b ** 2 === c ** 2 ? console.log('right') : console.log('wrong');
});

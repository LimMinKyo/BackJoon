const fs = require('fs');
// const filePath = './03. for문/11. X보다 작은 수/input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const X = parseInt(input[0].split(' ')[1]);
const numbers = input[1].split(' ').map(value => +value);

const result = numbers.filter(num => num < X).join(' ');
console.log(result);
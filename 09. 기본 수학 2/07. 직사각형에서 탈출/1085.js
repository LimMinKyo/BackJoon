const fs = require('fs');
// const filePath = './09. 기본 수학 2/07. 직사각형에서 탈출/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [x, y, w, h] = input;

const answer = [x, y, w-x, h-y];

console.log(Math.min(...answer));

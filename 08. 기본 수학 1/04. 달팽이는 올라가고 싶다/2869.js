const fs = require('fs');
// const filePath = './08. 기본 수학 1/04. 달팽이는 올라가고 싶다/input.txt';
// const input = fs.readFileSync(filePath).toString().split(' ').map(value => +value);
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [A, B, V] = input;

console.log(Math.ceil((V - B) / (A - B)));
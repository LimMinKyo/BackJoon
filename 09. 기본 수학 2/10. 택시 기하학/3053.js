const fs = require('fs');
// const filePath = './09. 기본 수학 2/10. 택시 기하학/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

const radius = input;
const euclidArea = radius * radius * Math.PI;
const texiArea = radius * radius * 2;

console.log(euclidArea.toFixed(6));
console.log(texiArea.toFixed(6));

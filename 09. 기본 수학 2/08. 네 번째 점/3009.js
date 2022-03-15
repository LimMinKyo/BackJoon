const fs = require('fs');
// const filePath = './09. 기본 수학 2/08. 네 번째 점/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arrayX = [];
let arrayY = [];

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(value => +value);
  arrayX.push(x);
  arrayY.push(y);
}

arrayX = arrayX.sort();
arrayY = arrayY.sort();

const x = arrayX[0] === arrayX[1] ? arrayX[2] : arrayX[0];
const y = arrayY[0] === arrayY[1] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);

const fs = require('fs');
// const filePath = './08. 기본 수학 1/02. 벌집/input.txt';
// const input = Number(fs.readFileSync(filePath).toString());
const input = Number(fs.readFileSync('/dev/stdin').toString());

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);

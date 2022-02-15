const fs = require('fs');
// const filePath = './07. 문자열/09. 크로아티아 알파벳/input.txt';
// let input = fs.readFileSync(filePath).toString().trim();
let input = fs.readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < croatia.length; i++) {
  input = input.split(croatia[i]).join('@');
}

console.log(input.length);

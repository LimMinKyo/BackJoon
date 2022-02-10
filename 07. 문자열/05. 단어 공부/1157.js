const fs = require('fs');
// const filePath = './07. 문자열/05. 단어 공부/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().toLowerCase();
const input = fs.readFileSync('/dev/stdin').toString().trim().toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));

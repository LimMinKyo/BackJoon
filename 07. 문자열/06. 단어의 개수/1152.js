const fs = require('fs');
// const filePath = './07. 문자열/06. 단어의 개수/input.txt';
// const input = fs.readFileSync(filePath).toString().trim();
const input = fs.readFileSync('/dev/stdin').toString().trim();

const word = input.split(' ');

console.log(word[0] === "" ? 0 : word.length);

const fs = require('fs');
// const filePath = './07. 문자열/03. 알파벳 찾기/input.txt';
// const input = fs.readFileSync(filePath).toString();
const input = fs.readFileSync('/dev/stdin').toString();

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabetIndex = [];

for(let i = 0; i < alphabet.length; i++){
  const index = input.indexOf(alphabet[i]);
  alphabetIndex.push(index);
}

console.log(alphabetIndex.join(' '));

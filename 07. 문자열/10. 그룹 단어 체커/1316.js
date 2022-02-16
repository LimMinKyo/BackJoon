const fs = require('fs');
// const filePath = './07. 문자열/10. 그룹 단어 체커/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    countGroupWord++;
  }
}

console.log(countGroupWord);

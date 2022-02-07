const fs = require('fs');
// const filePath = './07. 문자열/04. 문자열 반복/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, str] = input[i].split(' ');
  const strArr = str.split('');
  let result = '';

  const repeat = (item) => {
    for (let j = 1; j <= R; j++) {
      result += item;
    }
  };

  strArr.forEach(repeat);
  console.log(result);
}

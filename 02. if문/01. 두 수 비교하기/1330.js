// console.log(process.cwd());
const fs = require('fs');
// const filePath = "./02. if문/01. 두 수 비교하기/input.txt";
// const inputData = fs.readFileSync(filePath).toString().split(' ').map(value => +value);
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);
const [A,B] = inputData;

if (A < B) {
  console.log("<");
} else if (A > B) {
  console.log(">");
} else if (A == B) {
  console.log("==");
}
// console.log(process.cwd());
const fs = require('fs');
// const filePath = "./02. if문/03. 윤년/input.txt"
// const inputData = parseInt(fs.readFileSync(filePath).toString());
const inputData = parseInt(fs.readFileSync("/dev/stdin").toString());
const a = inputData;

if((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)){
  console.log(1);
} else {
  console.log(0);
}
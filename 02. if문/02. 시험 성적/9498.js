// console.log(process.cwd());
const fs = require('fs');
// const filePath = "./02. if문/02. 시험 성적/input.txt"
// const inputData = parseInt(fs.readFileSync(filePath).toString());
const inputData = parseInt(fs.readFileSync("/dev/stdin").toString());
const a = inputData;

if(a >= 90 && a <= 100){
  console.log("A");
} else if(a >= 80 && a <= 89) {
  console.log("B");
} else if(a >= 70 && a <= 79) {
  console.log("C");
} else if(a >= 60 && a <= 69) {
  console.log("D");
} else {
  console.log("F");
}
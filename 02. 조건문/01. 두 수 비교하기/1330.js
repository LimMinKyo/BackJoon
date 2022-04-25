const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);
const [A,B] = inputData;

if (A < B) {
  console.log("<");
} else if (A > B) {
  console.log(">");
} else if (A == B) {
  console.log("==");
}
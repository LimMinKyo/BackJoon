const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [A, B, C] = input;

if (A === B && A === C) {
  console.log(10000 + A * 1000);
} else if (A !== B && A !== C && B !== C) {
  console.log(Math.max(A, B, C) * 100);
} else {
  if (A === B) {
    console.log(1000 + A * 100);
  }
  if (A === C) {
    console.log(1000 + A * 100);
  }
  if (B === C) {
    console.log(1000 + B * 100);
  }
}
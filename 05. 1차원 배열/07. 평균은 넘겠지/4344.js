const fs = require('fs');
// const filePath = './05. 1차원 배열/07. 평균은 넘겠지/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const C = input[0];

for (let i = 1; i <= C; i++) {
  const score = input[i].split(' ').map(value => +value);
  const N = score.shift() * 1;
  let count = 0;
  
  let average = score.reduce((prev, curr) => prev += curr);
  
  average /= N;

  for (let j = 0; j < N; j++) {
      if (score[j] > average) {
          count++;
      }
  }
  
  const result = ((count / N) * 100).toFixed(3);
  
  console.log(result + "%");
}

const fs = require('fs');
// const filePath = './05. 1차원 배열/05. 평균/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const score = input[1].split(' ').map(value => +value);
const max = Math.max(...score);

const newScore = score.map(score => score / max * 100);
const sum = newScore.reduce((prev, curr) => prev + curr);
const average = sum / N;

console.log(average);

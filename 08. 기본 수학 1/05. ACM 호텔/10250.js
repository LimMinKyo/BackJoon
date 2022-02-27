const fs = require('fs');
// const filePath = './08. 기본 수학 1/05. ACM 호텔/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [H, W, N] = input[i].split(' ').map((value) => +value);
  const floor = N % H === 0 ? H : N % H;
  const roomNumber = Math.ceil(N / H) < 10 ? '0' + Math.ceil(N / H) : Math.ceil(N / H);

  console.log(`${floor}${roomNumber}`);
}

const fs = require('fs');
// const filePath = './02. if문/06. 오븐 시계/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [hour, minute] = input[0].split(' ').map(value => +value);
let time = Number(input[1]);

const minutePlusTime = minute + time;

if (minutePlusTime >= 60) {
  hour = Math.floor(hour + (minutePlusTime / 60));
  minute = minutePlusTime % 60;
  if (hour >= 24) {
    hour -= 24;
  }
} else {
  minute = minutePlusTime;
}

console.log(hour, minute);
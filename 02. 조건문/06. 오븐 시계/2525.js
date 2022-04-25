const fs = require('fs');
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
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const X = parseInt(input[0].split(' ')[1]);
const numbers = input[1].split(' ').map(value => +value);

const result = numbers.filter(num => num < X).join(' ');
console.log(result);
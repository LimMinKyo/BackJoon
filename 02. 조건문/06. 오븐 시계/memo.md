## 다른 풀이
모든 시간을 분으로 바꾸고, 연산한 값에서 60을 나눈 값과 60을 나눴을 때의 나머지를 시와 분으로 나눴습니다.

만약 23시 30분에서 1000분의 요리시간이 걸린다면, 40시 10분이 나올 수 있기에, 시간 데이터가 24이거나 24가 넘어갈 땐 24을 빼줘야 문제에서 원하는 시간이 나옵니다. 

```js
const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

const current = input[0].split(' ').map(Number); 

const currentHour = current[0]; 
const currentMinute = current[1]; 
const cookTime = Number(input[1]); 

const cookEndTimeHour = parseInt((currentHour*60 + currentMinute + cookTime)/ 60); 
const cookEndTimeMinute = parseInt((currentHour*60 + currentMinute + cookTime)% 60); 

console.log(cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour, cookEndTimeMinute);

```

___

- 출처: https://overcome-the-limits.tistory.com/entry/알고리즘-백준-2525-오븐-시계-with-nodejs [Plus Ultra]
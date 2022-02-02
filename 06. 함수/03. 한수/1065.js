const fs = require('fs');
// const filePath = './06. 함수/03. 한수/input.txt';
// const input = Number(fs.readFileSync(filePath).toString().trim());
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const arr = new Array(input + 1).fill(true);

for(let i = 1; i <= input; i++){
  const numList = String(i).split('');
  if(numList.length < 3){
    continue;
  } else {
    const d = numList[1] - numList[0];
    for(let j = 1; j < numList.length - 1; j++){
      if(d !== numList[j + 1] - numList[j]){
        arr[i] = false;
        break;
      }
    }
  }
}

console.log(arr.filter(value => value).length - 1);

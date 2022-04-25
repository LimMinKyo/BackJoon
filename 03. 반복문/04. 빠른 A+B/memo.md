## 문제

본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간 초과가 날 수 있다는 점이다.

첫 줄에 테스트 케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T 줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

## 풀이

테스트 케이스의 개수가 최대 1,000,000가 나올 수 있는 상황입니다.

문제에서는 하나씩 출력해도 된다고 하지만 js는 하나씩 출력을 하면 필히 시간 초과라는 결과를 얻었습니다.

그래서 하나의 문자열에 결과값과 개행 문자를 넣어 마지막에 출력을 했습니다.

for 문을 사용해 1부터 시작해 split 메서드로 나눈 후 결과값을 얻고 하나의 문자열에 넣어 출력을 해줍니다.

- fs 방식
```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
```

- readline 방식
```js
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let answer = '';
rl.on('line', line=>{
    const input = line.split(' ');

    if(input.length===2){
        const A = Number(input[0]);
        const B = Number(input[1]);
        answer += A+B + '\n';
    }
}).on('close', ()=>{
    console.log(answer);
    process.exit();
})
```

- 출처: https://gurtn.tistory.com/37
- 출처: https://velog.io/@mygomi/TIL-57-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-15552-%EB%B9%A0%EB%A5%B8-%EC%9E%85%EC%B6%9C%EB%A0%A5

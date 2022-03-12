## 풀이
**에라스토텔레스의 체를 이용한 소수구하기**

1. 0 부터 최댓값인 M까지의 배열을 true로 채운다.
2. 0 과 1은 소수가 아니므로 false로 바꿔주고 남은 수 중 가장 작은수인 2의 배수들을 false로 바꿔준다. (시작점인 2는 그대로 true)
3. 2번이 끝나면 남아있는 수 중 그다음으로 작은수인 i를 찾아 더이상 반복할 수 없을 때까지 반복해준다.

이 경우에는 입력값이 여러개이기 때문에 반복문을 통해서 함수를 여러번 반복하여 실행해 주었고 입력값의 마지막 `0`은 필요가없기때문에 `pop()`으로 제거해주었다.

처음에 주어진 자연수 `n`이상 `2n`이하의 소수의 갯수를 구하는 것인줄 알았으나 `n`초과 `2n`이하의 소수의 갯수를구하는 문제였다.

## 코드

```js
let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.pop();

for (let i = 0; i < inputs.length; i++) {
    let input = Number(inputs[i]);

    let input2 = input * 2;

    let isPrimeNumber = Array(input2 + 1).fill(true);
    isPrimeNumber[0] = isPrimeNumber[1] = false;

    function PrimeNumber() {
        for(let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
            if(isPrimeNumber[i]) {
                let m = 2;
                while(i * m <= input2) {
                    isPrimeNumber[i * m] = false;
                    m++;
                }
            }
        } 
        let results = [];
    
        for(let i = input + 1; i <= input2; i++) {
            if(isPrimeNumber[i]) {
                results.push(i);
            }
        }
        console.log(results.length);
    
    }
    
    PrimeNumber();
}
```

___

- 출처: https://velog.io/@gkswn45/JavaScript-%EB%B0%B1%EC%A4%80-4948%EB%B2%88-%EB%B2%A0%EB%A5%B4%ED%8A%B8%EB%9E%91-%EA%B3%B5%EC%A4%80
## 풀이

첫째줄을 제외한 (테스트 케이스 개수) 나머지 줄을 기준으로 for 문을 돌려줘서

각 케이스를 split를 공백을 기준으로 나눠줍니다.

<br>

shift 메서드를 사용하여 해당 배열의 맨 앞 값을 빼줍니다. (학생의 수)

평균을 구하기 위한 해당 케이스 점수의 총합을 구해주고 학생의 수만큼 나눠 평균을 구해줍니다.

학생의 수를 기준으로 for 문을 돌려 해당 케이스의 값이 평균보다 높을 때마다 카운트 값을 1씩 늘려줍니다.

<br>

그 후 (카운트(평균을 넘는 수) / 학생의 수) * 100)으로 평균을 넘는 학생의 비율을 구해주고

toFixed 메서드를 사용하여 소수점 3자리까지 표시해준 후 해당 값에 '%'를 붙여준 뒤 출력 해 줍니다.

## 코드

```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');
    let num2 = score.shift() * 1;
    let count = 0;
    
    let avg = score.reduce((acc, v) => acc += v * 1, 0);
    
    avg /= num2;

    for (let j = 0; j < num2; j++) {
        if (score[j] > avg) {
            count++;
        }
    }
    
    let result = ((count / num2) * 100).toFixed(3);
    
    console.log(result + "%");
}
```

___

출처: https://gurtn.tistory.com/45
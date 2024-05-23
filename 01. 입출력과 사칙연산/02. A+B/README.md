# 메모

## Node.js

### 코딩테스트는 일반적으로 아래의 3단계 구성된다.

1. 입력: 주어진 입력을 받아들여 프로그램의 자료구조에 저장
2. 계산: 알고리즘을 활용하여 정답 도출
3. 출력: 정답을 주어진 형식에 맞게끔 출력

- 로직 도중 인터랙티브하게 유저로부터 입력을 받거나 출력을 요하지 않기 때문에, 복잡한 readline 모듈보다는 fs 모듈을 통해 간결하게 작성 하는편이 좋아보인다.
- Node.js 파일 시스템 모듈을 사용하면 컴퓨터의 파일 시스템으로 작업할 수 있습니다.
- 파일 시스템 모듈을 포함하려면 다음 require()방법을 사용하십시오.

```js
const fs = require("fs");
```

- fs.readFile(filename, [options], callback)

  - filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출합니다. (비동기적)

- fs.readFileSync(filename, [options])

  - filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환합니다.(동기적)

- fs.writeFile(filename, data, [options], callback)

  - filename의 파일에 [options]의 방식으로 data 내용을 쓴 후 callback 함수를 호출합니다.(비동기적)

- fs.writeFileSync(filename, data, [options])
  - filename의 파일에 [options]의 방식으로 data 내용을 씁니다.(동기적)

```js
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
```

- 주의사항 : 계산시에는 parseInt 혹은 Number 함수를 통해 숫자로 형변환해야 에러가 발생하지 않는다.

- 차이점: Number는 숫자+문자가 혼합된 경우, NaN을 리턴하고, parseInt는 첫문자가 숫자라면, 숫자+문자의 경우도 숫자를 리턴한다.

- split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

```js
// 아래의 코드를 통해서 현재 작업 중인 폴더 위치를 알아낼 수 있다.
console.log(process.cwd());
```

항상 '작업 중인 폴더', 즉 '주 프로그램이 실행되고 있는 곳'을 고려해야 한다는 점을 잊지 말자.

```js
// 로컬에서 테스트한 방식
const filePath = "./01. 입출력과 사칙연산/05. A+B/input.txt";
const inputData = fs.readFileSync(filePath).toString().split(" ");
```

- 참고: https://leeph.tistory.com/48
- 참고: https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174361/file-system-%EB%AA%A8%EB%93%88
- 참고: https://likethefirst.tistory.com/entry/JavaScript-Error-ENOENT-no-such-file-or-directory

## Rust

- [[ 백준 | RUST ] - 1000번 :: A + B](https://suil-bear.tistory.com/5)
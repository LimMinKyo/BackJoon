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

### 코드 설명

```rust
use std::io;

fn main() {
    let mut input_numbers = String::new();

    io::stdin().read_line(&mut input_numbers).unwrap();

    let numbers: Vec<i32> = input_numbers
        .trim()
        .split_whitespace()
        .map(|x| x.parse().expect("num_error"))
        .collect();

    println!("{}", numbers[0] + numbers[1]);
}
```

### 코드 구조

1. **`use std::io;`**: 표준 라이브러리의 `io` 모듈을 가져옵니다. Rust에서는 모듈 시스템을 통해 기능을 가져와 사용할 수 있습니다.

2. **`fn main() { ... }`**: 모든 Rust 프로그램의 진입점인 `main` 함수입니다. 이 함수는 프로그램이 실행될 때 처음 호출됩니다.

### 코드 세부 사항

1. **입력 받기**

```rust
let mut input_numbers = String::new();
```

- `let` 키워드를 사용하여 변수를 선언합니다.
- `mut` 키워드는 변수가 가변(mutable)임을 나타냅니다. 즉, 값이 변경될 수 있습니다.
- `String::new()`는 빈 문자열을 생성합니다.

2. **표준 입력에서 한 줄 읽기**

```rust
io::stdin().read_line(&mut input_numbers).unwrap();
```

- `io::stdin()`는 표준 입력을 나타내는 객체를 반환합니다.
- `read_line(&mut input_numbers)`는 표준 입력에서 한 줄을 읽어 `input_numbers` 변수에 저장합니다.
- `unwrap()`는 `Result` 타입의 값을 처리하는 메서드로, 여기서는 입력이 성공했는지 확인합니다. 실패할 경우 프로그램을 패닉(panic) 상태로 만듭니다.

3. **입력된 문자열을 숫자로 변환하기**

```rust
let numbers: Vec<i32> = input_numbers
    .trim()
    .split_whitespace()
    .map(|x| x.parse().expect("num_error"))
    .collect();
```

- `trim()`은 문자열의 앞뒤 공백을 제거합니다.
- `split_whitespace()`는 공백을 기준으로 문자열을 분리하여 각 단어를 반환합니다.
- `map(|x| x.parse().expect("num_error"))`는 각 단어를 숫자로 변환합니다. `x.parse()`는 문자열 `x`를 숫자로 변환하고, 변환이 실패하면 `expect("num_error")`는 오류 메시지를 출력하며 프로그램을 중단시킵니다.
- `collect()`는 결과를 컬렉션으로 모읍니다. 여기서는 `Vec<u32>` (32비트 부호 없는 정수 벡터)로 변환합니다.

4. **두 숫자의 합 출력**

```rust
println!("{}", numbers[0] + numbers[1]);
```

- `println!`은 출력 매크로로, 문자열을 콘솔에 출력합니다.
- `numbers[0]`와 `numbers[1]`는 벡터의 첫 번째와 두 번째 요소를 의미합니다. 두 숫자를 더한 값을 출력합니다.

### 요약

이 프로그램은 다음과 같은 과정을 통해 두 숫자의 합을 계산하고 출력합니다:

1. 표준 입력에서 한 줄을 읽어옵니다.
2. 읽어온 문자열을 공백을 기준으로 분리하여 숫자로 변환합니다.
3. 변환된 두 숫자의 합을 계산하여 출력합니다.

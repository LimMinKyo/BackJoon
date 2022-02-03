## 아스키 코드 변환
- `charCodeAt` : 문자열 중 하나를 선택하여 아스키코드 번호로 변환해주는 함수

```js
//문자열.charCodeAt(문자열 자릿수)

//happy의 2번째 인덱스값 p 의 아스키코드 번호 112
console.log('happy'.charCodeAt(2));
```

- `fromCharCode` : 아스키코드번호를 받아 문자열을 구성해주는 함수

```js
//String.fromCharCode(아스키코드 번호)

console.log(String.fromCharCode(112)); //p
console.log(String.fromCharCode(65, 83, 67, 73, 73)); //ASCII
```

___

- 출처: https://hceaan.tistory.com/70
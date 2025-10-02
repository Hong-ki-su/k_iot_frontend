// ! cf) 제어문: 프로그래밍 실행 흐름을 제어
// 조건문, 반복문

// 자바스크립트 조건문 
// : 주어진 조건에 따라 코드 실행 흐름을 제어 
// 조건에는 주로 비교 연산자를 활용
// >> boolean 값을 통해 조건을 검증
// if문, else문, else if문, switch문

// 1) if문, else문 else if문
/*
if(조건식) {
 조건이 참일떄 실행
} else if 조건식 {
 앞선 조건은 거짓 + 해당 조건은 참인 경우 실행 
}
*/

// ? 자바 변수 선언 및 초기화: 데이터타입 변수명 = 데이터값;
// ? 자바스크립트 변수 선언 및 초기화: 변수종류(변수|상수) 변수명 = 데이터값;
// +) 변수(let, var), 상수(const)

let number = 10;
if (number > 0) {
  // clg: console.log의 스니펫
  // 따옴표 안의 문자열을 간단하게 출력해주는 구문
  console.log(number);
}

// cf) 변수명(식별자)을 활용한 조건 검증
// false값: '', 0, undefined, null 등

let stringData = '';
let numberData = 0;

if (stringData || numberData) {
  // 둘 중 하나라도 true인 경우 실행
  console.log('해당 코드는 실행되지 않습니다');
}

console.log('해당 코드는 실행됩니다');

// == if/else/else if문 예제
let num = 10;

if (num < 0) {
  console.log('음수입니다');
} else if (num === 0) {
  console.log('0입니다');
} else {
  console.log('양수입니다');
}

// cf) 해당 실행될 코드 블럭이 한 줄일 경우 코드 축약 가능
if (num < 0) {
  console.log('음수입니다');
} else if (num === 0) {
  console.log('0입니다');
} else {
  console.log('양수입니다');
}

// 조건문 예제
// 13살 미만: 어린이
// 13살 이상 20살미만: 청소년
// 20살 이상: 성인

let age = 14;

if (age < 13) console.log('어린이입니다')
 else if (age >= 13 && age < 20) console.log('청소년');
else console.log('성인') 

// ! 2) switch case문
// : 하나의 표현식 값을 확인하고 해당 값과 일치하는 case문의 코드블록을 실행
// switch 블록내의 case 값들이 나열
// +) 어떤 case와도 일치하는 않을 경우에는 default문 실행

let fruit = 'banana'

switch(fruit) {
  case 'apple':
    console.log('사과');
    break;
    case 'banana':
   console.log('바나나');
   case 'train':
    console.log('바나나는 길어 길면 기차');
    break;
    default:
      console.log('일치하는 조건이 없습니다')
}

// ? if 조건문 VS 삼항 연산자 VS switch문 ==
// 점수를 변수에 담아
// 해당 점수가 0미만 100초과일 경우 유효한 점수가 아닙니다. //! 첫번째 조건식

// 90점 이상 A
// 80점 이상 B
// 70점 이상 C
// 60점 이상 D
// 그외의 경우 F 학점 >> 각 학점의 값을 grade
 


let score;
let grade;

console.log('=== if 조건문 ===')
if (score < 90) console.log('A');
else if (score >= 80 && score < 70) console.log('B')
  else console.log('유효한 조건이 아닙니다');

console.log('=== 삼항연산자 조건문 ===')

score = 91;

grade = 
 score > 100 || score < 0
 ? '유효한 점수가 아닙니다' : score >= 90
 ? 'A' : score >= 80
 ? 'A' : score >= 70
 ? 'A' : score >= 60
 ? 'D' : 'F';

 console.log('학점은 ${grade}입니다');

console.log('=== switch 조건문 ===')
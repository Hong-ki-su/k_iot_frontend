// === 콜백 함수를 활용하는 JS의 내장 함수

//! 배열의 콜백 함수 메서드

// 4) reduce() 
// : 배열의 각 요소에 대해 함수를 적용하여 단일 값을 생성 (하나의 값)
// 누적된값으로 단일 결과 도출

//? array.reduce(() -> {...}, initialValue);
// - acc: 누적값(이전 반환값)
// >> 각 순회마다 축적되는 값 (이전 작업물의 반환값, 첫 번쨰 호출 시에는 초기값 지정)

// - initialValue: 초기 누적값 (생략 시 첫 요소가 초기 acc가 됨)

// cf) 기존 콜백 함수의 인자: value, index, array

let numbers = [1, 2, 3, 4];

let sum1 = numbers.reduce((acc, value) => acc + value, 0);

let sum2 = numbers.reduce(function(acc, value){
  return acc + value;
}, 10);

console.log(sum1);
console.log(sum2);

// reduce 예시 == //
let cars = ['audi', 'bmw', 'hyundai', 'volvo'];

let combinedCar = cars.reduce((acc, car) => {
  return acc + car + ", ";
}, "Cars: ");

console.log(combinedCar); // Cars: audi, bmw, hyundai, volvo,
console.log(typeof combinedCar); // string

//! == 기타 배열의 고급 메서드 == //
let numberArray = [3, 1, 5, 2, 2, 7, 6];

// 1) sort(), reverse() 정렬메서드
console.log(numberArray.sort());
console.log(numberArray.reverse());

// 2) indexOf, lastIndexOf(): 특정 요소의 인덱스를 찾는 메서드
// 3) find(), findIndex(): 특정 조건을 만족하는 첫 번째 요소/첫 번쨰 요소의 인덱스를 반환
// >> 존재하지 않으면 -1 반환

let nums = [5, 4, 6, 1, 7, 3];

let firstOverSix = nums.find(num => num > 5);
console.log(firstOverSix); // 5 >> 3 보다 큰 수는 4, 5, 6, 7 이지만 요소의 첫 번쨰 순서인 5가 출력

let firstOverEightIndex = nums.findIndex(num => num > 8);
console.log(firstOverEightIndex);
//! JSONPlaceholder
// : 가상의 무료 데이터를 제공하는 Mock Server (가짜 서버)
// - Rest API 사용자 사진 등의 정보를 JSON 형식으로 제공 

// [전체 조회 - 배열 반환]
// https://jsonplaceholer.typicode.com/원하고자하는데이터
// https://jsonplaceholer.typicode.com/users
// https://jsonplaceholer.typicode.com/posts
// https://jsonplaceholer.typicode.com/albums

// [단건 조회 - 객체 반환]
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts/1

//% 1. promise 체이닝
function fetchPromiseUserData() {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      // HTTP 응답 상태 확인 (200번대가 아니라면 에러 처리)

      if (!response.ok) {
        throw new Error(`HTTP error: status ${response.status}`);
      }

      return response.json();
    })
    .then(users => users.forEach(user => console.log(user)));
   //? cf) forEach는 동기 함수에 대한 기대
   // >> 콜백 함수나 비동기 문법을 사용하더라도 실행을 기다려주지 않음
   
  } catch (error) {
    console.error(error);
  }
}

console.log('Promise로 데이터 처리하기');
fetchPromiseUserData();

//% 2. Async & Await
async function fetchAsyncPostsData() {
  try {
    const response = await fetch('https://jsonplaceholer.typicode.com/posts/1');
  }

  if (!response.ok) {
    throw new Error
  }

  const post = await response.json();

  console.log(post);

} catch(e) {
  console.error(`게시물 가져오기 실패: ${e.message}`);
}
console.log('Async, Await로 데이터로 가져오기');
fetchAsyncPostsData();
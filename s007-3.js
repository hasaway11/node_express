
// 프로미스 객체를 변수에 바로 할당하는 방식을 사용할 수도 있지만, 
// // 보통은 다음과 같이 별도로 함수로 감싸서 사용하는 것이 일반적
function myPromise() {
  return new Promise((resolve, reject) => {
    if (/* 성공 조건 */) {
      resolve(/* 결과 값 */);
    } else {
      reject(/* 에러 값 */);
    }
  });
}

// 프로미스 객체를 반환하는 함수 사용
myPromise()
    .then((result) => {
      // 성공 시 실행할 콜백 함수
    })
    .catch((error) => {
      // 실패 시 실행할 콜백 함수
    });


// ES6 Promise 생성자
// new Promise(executor)
// - executor : (resolve, reject)=>{} 형태의 실행 함수
// - resolve는 Promise를 fulfilled(이행) 상태로 바꾸는 함수
// - reject는 Promise를 rejected 상태로 바꾸는 함수

// - 규약
// executor는 Promise에 탑재되어 실행되는 비동기 작업
// Promise에 탑재되어 실행될 executor는 비동기 작업을 수행한 다음 resolve, reject를 호출해 상태를 결정지어야 한다
// 결정된 상태에 따라 성공시, 실패시 작업을 체이닝해서 실행할 수 있다
// resolve, reject를 호출하지 않으면 영원히 pending 상태 유지.

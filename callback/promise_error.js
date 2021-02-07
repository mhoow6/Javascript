// 1. then(successCallback, failureCallback) 에서 두 번째 인자로 에러를 처리하는 방법
// 2. catch()를 이용하는 방법
// 두 가지 모두 Promise 객체의 reject()메서드가 호출되어 실패 상태가 된 경우에 실행

function getData() {
  return new Promise(function (resolve, reject) {
    reject("failed");
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(
  function () {
    // ...
  },
  function (err) {
    console.log(err);
  }
);

// 2. catch()로 에러를 처리하는 코드
// 콜백 함수 내부에서 나는 오류를 잡아주기 때문에
// 가급적 catch()를 사용하는 것이 좋다
getData()
  .then()
  .catch(function (err) {
    console.log(err);
  });

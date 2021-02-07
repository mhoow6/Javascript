// Promise는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체

function getData() {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
    $.get("url 주소/products/1", function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
// Promise 객체가 이행 상태(fullfilled)가 되면 then()을 이용하여
// 처리 결과 값을 받을 수 있다.
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});

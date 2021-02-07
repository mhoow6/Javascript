// $.get("url", function (response) {
//   parseValue(response, function (id) {
//     auth(id, function (result) {
//       display(result, function (text) {
//         console.log(text);
//       });
//     });
//   });
// });

// 중첩해서 선언했던 콜백 익명 함수를 각각의 함수로 구분해서
// 콜백 지옥을 해결
// Promise 객체나 async로 간단히 해결하는 방법도 있다.
function parseValueDone(id) {
  auth(id, authDone);
}
function authDone(result) {
  display(result, displayDone);
}
function displayDone(text) {
  console.log(text);
}
$.get("url", function (response) {
  parseValue(response, parseValueDone);
});

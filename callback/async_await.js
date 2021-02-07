/* 1. callback 방식으로 비동기 처리 */
function logName() {
  var user = fetchUser("domain.com/users/1", function (user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}

// 서버에서 데이터를 받아오는 HTTP 통신 코드라고 가정
function fetchUser(url, cb) {
  // url을 통해 사용자의 정보를 가져온다.
  // 콜백함수를 실행한다.
}

/* 2. Promise을 이용한 비동기 처리 */
fetchUser().then(logName());

function logName() {
  if (user.id === 1) {
    console.log(user.name);
  }
}

// 서버에서 데이터를 받아오는 HTTP 통신 코드라고 가정
function fetchUser(url) {
  // url을 통해 사용자의 정보를 가져온다.
  return new Promise(function (resolve, reject) {
    var user = {
      id: "abc",
      password: "1234",
    };
    resolve(user);
  });
}

/* 3. async & await */
// async function 함수명() {
//   await 비동기_처리_메서드_명();
// }
async function logName() {
  var user = await fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}

// 서버에서 데이터를 받아오는 HTTP 통신 코드라고 가정
function fetchUser(url) {
  // url을 통해 사용자의 정보를 가져온다.
  return new Promise((resolve, reject) => {
    var user = {
      id: "abc",
      password: "1234",
    };

    resolve(user);
  });
}

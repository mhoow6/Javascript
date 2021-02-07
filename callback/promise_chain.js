var userInfo = {
  id: "test@abc.com",
  pw: "****",
};

getData(userInfo).then(parseValue).then(auth).then(display);

function getData() {
  return new Promise({
    // ...
  });
}

function parseValue() {
  return new Promise({
    // ...
  });
}
function auth() {
  return new Promise({
    // ...
  });
}
function display() {
  return new Promise({
    // ...
  });
}

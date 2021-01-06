console.log(location.toString(), location.href);

// location 객체에 대한 정보를 보여줌
console.log(location)

// 인자로 문자열이 와야 하기 때문에
// .toString() 결과를 보여준다.
alert(location)

// get방식의 http 요청 파라미터 가져오기 .search
// 문서에 정의해놓은 위치 가져오기 .hash
console.log(location.protocol, location.host, location.port, location.pathname, location.search, location.hash)
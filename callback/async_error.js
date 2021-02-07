async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    // 네트워크 오류 뿐만 아니라 타입 오류등도 catch로 잡아냄
    console.log(error);
  }
}

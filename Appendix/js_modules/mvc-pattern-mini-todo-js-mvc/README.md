# minimal-todo-js-mvc
Very minimal MVC example (JavaScript with JQuery).
Based on https://github.com/joshcrawmer4/Javascript-MVC-App.

requirejs로 모듈화함

TodoController
- init()
  ㅁ. Observable에 callback 함수 등록 : TodoView에 addTodo()를 등록함
- controller에서 view와 model을 가지고 있음.

TodoModel
- addTodo():
  ㅁ. observable 등록된 함수를 호출함 

TodoView
- init()
  ㅁ. 버튼에 관련에 핸들러 등록함
  ㅁ. TodoModel에 Observable에 callback후사를 등록 : refreshTodoList() 
- event 관련 함수 정의

Observable
- 등록된 함수들이 notify에 의해서 실행됨
- 등록함수
  ㅁ. TodoController 에서 TodoView : addTodo() 등록
  ㅁ. TodoView에서 TodoModel : refreshTodoList() 등록
  
실행 순서
- TodoView : 버튼 클릭시 > Controller가 등록한 view : addTodo():notify()> refreshTodoList()
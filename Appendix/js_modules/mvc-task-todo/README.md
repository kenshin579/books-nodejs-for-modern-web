https://www.awwwards.com/build-a-simple-javascript-app-the-mvc-way.html


MVC pattern

Model (Data Layer)
- 모델이 변경될때마다 observer에게 변경이 있다는 노티를 함 ()Event Dispatcher를 통해서)
  

View (Presentation Layer)
- DOM에 접근하고 Event Handler를 세팅(ex. click, onmouseover)하는 담당을 한다
- 사용자가 new task를 입력하고 enter를 치면, event dispatcher는 controller에게 노티를 주고 controller는 model를 업데이트한다
- Model의 event 함수는 view에 정의한 함수로 등록함

Controller (Application Logic)
- controller는 모딜이나 뷰에 의해서 발생한 이벤트에 대한 처리하거나 응답을 한다. 
- 사용자가 뷰를 조작할때마다 모델을 업데이트함
- 모델이 변경될때마다 뷰를 업데이트한다
- View의 event 함수를 controller에 정의한 함수로 등록함

Event Dispatcher
- 객체로서 무한정의 함수를 등록할 수 있게 하는 객체이다
- 이벤트 객체에 등록한 모든 함수는 notify하면 모두 실행한다.

Sequence
1. 추가 할때
Add 버튼 클릭 > TaskView의 addTask 함수 호출: notify > Controller가 등록한 addTask가 호출 > Model의 addTask를 호출함
: tasks array에 추가되고 나서 TaskView가 등록한 addTaskEvent 함수를 notify 함 > this.show() : 다시 task 전체를 보여줌

2. Task 선택시
Task 선택 클릭 > TaskView의 selectOrUnselectTask 함수 : selectTaskEvent에 notify함 > 
TaskController가 등록한 selectTask 함수 실행 :  Model.setSelectedTask를 실행함 >  selectedTasks array에 추가

3. Task 삭제
여러 Task를 선택하면 #2에서 selectedTasks에 해당 index가 저장이 됨 > TaskView의 deleteTaskButton 호출 : deleteTaskEvent notify함
> Controller의 model.deleteTask 함수를 실행함 > model의 delete 함수는 tasks 목록에서 selectedTasks의 index 값을 삭제하고 deleteTasksEvent를 notify함
> View의 목록을 업데이트함
 

TODO LIST
- 삭제가 안됨
- complete task 동작 안됨 


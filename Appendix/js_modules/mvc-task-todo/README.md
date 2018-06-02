https://www.awwwards.com/build-a-simple-javascript-app-the-mvc-way.html


MVC pattern

Model (Data Layer)
- 모델이 변경될때마다 observer에게 변경이 있다는 노티를 함 ()Event Dispatcher를 통해서)
  

View (Presentation Layer)
- DOM에 접근하고 Event Handler를 세팅(ex. click, onmouseover)하는 담당을 한다
- 사용자가 new task를 입력하고 enter를 치면, event dispatcher는 controller에게 노티를 주고 controller는 model를 업데이트한다

Controller (Application Logic)
- controller는 모딜이나 뷰에 의해서 발생한 이벤트에 대한 처리하거나 응답을 한다. 
- 사용자가 뷰를 조작할때마다 모델을 업데이트함
- 모델이 변경될때마다 뷰를 업데이트한다

Event Dispatcher
- 객체로서 무한정의 함수를 등록할 수 있게 하는 객체이다
- 이벤트 객체에 등록한 모든 함수는 notify하면 모두 실행한다.

History
- 2018/5/28 - requirejs로 변경함
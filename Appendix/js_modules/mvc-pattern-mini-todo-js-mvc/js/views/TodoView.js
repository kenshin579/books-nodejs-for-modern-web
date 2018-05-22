define([
    "Observable"
], function (Observable) {
    var TodoView = function TodoView(model) {
        // View kennt Model
        this.model = model;
        this.addTodoSubject = new Observable(this);
        this.init();
    };

    TodoView.prototype = {
        init: function () {
            //CSS 클래스를 기반으로 DOM에서 요소 선택
            this.$container = $('.main-container');
            this.$addTodoButton = this.$container.find('.add-todo-button');
            this.$todoTextBox = this.$container.find('.todo-textbox');
            this.$todoContainer = this.$container.find('.todo-container');

            //버튼에 이벤트 핸들러 등록
            this.$addTodoButton.click(() => this.addTodoButtonClicked());

            //모델에 새로 추가 된 ToDos refresh하기 위한 함수 등록
            this.model.addTodoSubject.register(() => this.refreshTodoList());
        },

        addTodoButtonClicked: function () {
            this.addTodoSubject.notify({
                todo: this.$todoTextBox.val()
            });
            this.$todoTextBox.val('');
        },

        refreshTodoList: function () {
            // 모델에서 ToDos 목록 읽기
            const todos = this.model.getTodos();

            // HTML을 생성하고 'todo-container' 요소에 넣습니다 (DOM 조작).
            const $todoContainer = this.$todoContainer;

            $todoContainer.html('');

            let index = 0;
            for (let todo in todos) {
                $todoContainer.append("<div><label><input type='checkbox' class='todo' data-index='" + index + "' data-task-selected='false'>" + todos[todo].name + "</label></div>");
                index++;
            }
        }
    };
    return TodoView;
});
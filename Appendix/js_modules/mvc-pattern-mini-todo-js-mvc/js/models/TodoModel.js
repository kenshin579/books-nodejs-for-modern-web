define([
    "Observable"
], function (Observable) {
    var TodoModel = function TodoModel() {
        this.todos = [];
        this.addTodoSubject = new Observable(this);
    };

    TodoModel.prototype = {
        // 새 ToDo 추가
        addTodo: function (todo) {
            this.todos.push({
                name: todo
            });

            // 등록한 함수를 실행함
            this.addTodoSubject.notify();
        },

        // 현재 ToDos 읽기
        getTodos: function () {
            return this.todos;
        }

    };

    return TodoModel;
});

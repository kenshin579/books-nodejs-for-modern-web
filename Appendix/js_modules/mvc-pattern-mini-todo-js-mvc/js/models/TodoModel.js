define([
    "Observable"
], function (Observable) {
    var TodoModel = function TodoModel() {
        this.todos = [];
        this.addTodoSubject = new Observable(this);
    };

    TodoModel.prototype = {

        //
        addTodo: function (todo) {
            this.todos.push({
                name: todo
            });

            this.addTodoSubject.notify();
        },

        getTodos: function () {
            return this.todos;
        }
    };

    return TodoModel;
});

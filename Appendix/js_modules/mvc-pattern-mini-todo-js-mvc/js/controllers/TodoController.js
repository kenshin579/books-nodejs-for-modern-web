define([], function () {
    var TodoController = function TodoController(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    };

    TodoController.prototype = {
        init: function () {
            console.log("TodoController.js : 보기에서 새로 추가 된 ToDos 등록");
            this.view.addTodoSubject.register(x => this.addTodo(x));
        },

        addTodo: function (args) {
            // 모델 업데이트
            console.log("TodoController.js : 추가된 todo 모델에 반영함 args:", args);
            this.model.addTodo(args.todo);
        }
    };

    return TodoController;
});
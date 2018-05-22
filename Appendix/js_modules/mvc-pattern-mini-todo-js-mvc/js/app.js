define([
    "models/TodoModel",
    "views/TodoView",
    "controllers/TodoController"
], function (TodoModel, TodoView, TodoController) {
    var App = function () {
    };

    App.prototype.run = function () {
        console.log("app started");

        var model = new TodoModel();
        var view = new TodoView(model);
        var controller = new TodoController(model, view);
    };
    return App;
});
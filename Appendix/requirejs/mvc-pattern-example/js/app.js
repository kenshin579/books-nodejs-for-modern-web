define([
    "models/PenguinModel",
    "views/PenguinView",
    "controller/PenguinController"
], function (PenguinModel, PenguinView, PenguinController) {
    var App = function () {
    };

    App.prototype.run = function () {
        var penguinModel = new PenguinModel(XMLHttpRequest);

        var targetElement = document.getElementById('listOfPenguins');
        var penguinView = new PenguinView(targetElement);

        var controller = new PenguinController(penguinView, penguinModel);

        controller.initialize();

        controller.onClickGetPenguin({currentTarget: {dataset: {penguinIndex: 0}}});
    };
    return App;
});
define([], function () {
    var PenguinModel = function PenguinModel(XMLHttpRequest) {
        this.XMLHttpRequest = XMLHttpRequest;
    };

    PenguinModel.prototype.getPenguin = function getPenguin(index, showPenguinCallBack) {
        var oReq = new this.XMLHttpRequest();

        oReq.onload = function onLoad(e) {
            var ajaxResponse = JSON.parse(e.currentTarget.responseText);
            var penguin = ajaxResponse[index];

            penguin.index = index;
            penguin.count = ajaxResponse.length;

            showPenguinCallBack(penguin);
        };

        oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
        oReq.send();
    };

    return PenguinModel;
});
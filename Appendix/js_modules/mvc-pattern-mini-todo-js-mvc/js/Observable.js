define([], function () {
    var Observable = function Observable() {
        this.observers = [];
    };

    Observable.prototype = {
        register: function (observerCallback) {
            console.log("Observable.js : 등록 함수");
            this.observers.push(observerCallback);
        },

        notify: function (args) {
            console.log("Observable.js : 등록된 함수를 실행함: args:", args);
            for (var i = 0; i < this.observers.length; i += 1) {
                this.observers[i](args);
            }
        }
    };
    return Observable;
});

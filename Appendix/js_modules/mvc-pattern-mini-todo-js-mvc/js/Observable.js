define([], function () {
    var Observable = function Observable() {
        this.observers = [];
    };

    Observable.prototype = {

        register: function (observerCallback) {
            console.log("register");
            this.observers.push(observerCallback);
        },

        notify: function (args) {
            for (var i = 0; i < this.observers.length; i += 1) {
                this.observers[i](args);
            }
        }
    };
    return Observable;
});

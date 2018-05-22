var MyMath = (function () {

    // Put your private variables and functions here

    return { // Here are the public methods
        add: function (a, b) {
            return a + b;
        }
    };
})();

console.log(MyMath.add(1, 2));
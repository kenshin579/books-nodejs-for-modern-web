// gas.js
define(function () {
    // name과 type 변수는 접근할 수 없다.
    var name = '가스';
    var type = '자원';
    // exports 한 객체의 getGas(getter), setGas(setter) 를 통해 접근할 수 있다.
    var remain = 100;

    return {
        getGas: function () {
            return remain;
        },
        setGas: function (gas) {
            remain = gas;
        }
    };
});
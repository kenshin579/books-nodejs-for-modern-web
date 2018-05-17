// mineral.js
define(function () {
    // name과 type 변수는 접근할 수 없다.
    var name = '미네랄';
    var type = '자원';
    // exports 한 객체의 getMineral(getter), setMineral(setter) 를 통해 접근할 수 있다.
    var remain = 500;

    return {
        getMineral: function () {
            return remain;
        },
        setMineral: function (mineral) {
            remain = mineral;
        }
    };
});

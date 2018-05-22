/*
문제점: 자바스크립트 코드를 작성할때, 전역변수를 남발해서 사용하게 되면 후에 유지보수를 할때 크나큰 문제를 겪게 됩니다.
해결: 아래 같은 방식으로 전역변수가 충돌되는 문제를 해결하는 방법이 있습니다.
- setName(), getName()이라는 노출된 메서드로만 접근가능함

 */
var closure = (function () {
    var name = 'zumgu'; // private variable

    var that = this;
    var exports = {
        // setter
        setName: function (name) {
            that.name = name;
        },
        //getter
        getName: function () {
            return that.name;
        }
    };

    return exports;
})();
/*
01-main.js : public methodㄹㅡㄹ object literal notation으로 declare했지만
02-main.js : revealing module pattern으로 private attr and method를 반환함
 */
var MyMath = (function(){

    // With this pattern you can use the usual function notation:

    function add(a, b){
        return a + b;
    }

    return {
        add:add // But don't forget to declare it in the returned object!
    };
})();

console.log(MyMath.add(1, 2));
//https://www.lullabot.com/articles/flow-for-static-type-checking-javascript
//@flow
/*
1.static vs. dynamic typing
- dynamic typing에서는 런타임에만 알 수 있는 문제가 있음.
 */
var myObject = {
    prop1: 'Some text here'
};
// console.log(myObject.prop1()); // TypeError: myObject.prop1 is not a function

/*
implicit type coercion in JavaScript
- 임시적으로 형식 변환이 되는 게 문제임

*/
var myNumber /*: number */ = 20; //코멘트로도 인식할 수 있음
var myNumber: number = 20;
console.log(typeof myNumber); // number
myNumber = true; //임시적으로 형식 변환이 되어 버림
console.log(typeof myNumber); // boolean

/*
 이벤트 핸들링은 옵저버 패턴에 의해 작동됨
 - 이벤트를 대기하는 (EventListeners) 함수들이 옵저버 역할을 함
 - nodejs에는 events 모듈과 EventEmitter 클래스가 내장되어 있음

 */
// events 모듈 사용
const events = require('events');

// EventEmitter 객체 생성
const eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
const connectHandler = function connected() {
    console.log("Connection Successful");

    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit("data_received");
};

// connection 이벤트와 connectHandler 이벤트 핸들러를 연동
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function () {
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');

console.log("Program has ended");
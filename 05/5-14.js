// EventEmitter 객체를 생성합니다.
//process객체안에도 추가되었다고 하는데 안됨
// var custom = new process.EventEmitter();

var events = require('events');

var custom = new events.EventEmitter();

// 이벤트를 연결합니다.
custom.on('tick', function (code) {
    console.log('이벤트를 실행합니다. ^_^');
});

// 이벤트를 강제로 발생시킵니다.
custom.emit('tick');
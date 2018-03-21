// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 서버를 생성합니다.
var server = require('http');
var io = require('socket.io');

var server = http.createServer(function (request, response) {
    // HTMLPage.html 파일을 읽습니다.
    fs.readFile('11-17.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});

var io = socketio.listen(server);

// 소켓 서버 이벤트를 연결합니다.
io.sockets.on('connection', function (socket) {
    // 방 이름을 저장할 변수
    var roomName = null;

    // join 이벤트
    socket.on('join', function (data) {
        roomName = data;
        socket.join(data);
    });
    //
    // // message 이벤트
    // socket.on('message', function (data) {
    //     io.sockets.in(roomName).emit('message', 'test');
    // });
});
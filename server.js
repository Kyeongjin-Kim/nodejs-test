var http = require('http');
var fs = require("fs");
var url = require("url");
var port = process.env.PORT || 51234;
var socketio = require("C:/Users/Kyungjin/AppData/Roaming/npm/node_modules/socket.io");

//var port = 50002;
var server = http.createServer(function(request, response) {

    // 현재 url의 path 이름을 구함.
    var pathname = url.parse(request.url).pathname;

    // 루트 패쓰를 요청하면.
    if (pathname == "/") {

        // index.html 파일을 읽어서 응답함.
        fs.readFile('client.html', function(error, data) {
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(data);
        });

    }

}).listen(port, function() {
    console.log("server port : ", port)
});

// 소켓 서버 실행
var io = socketio.listen(server, { log: false });

// 로그 레벨 수위를 설정함.
io.sockets.on("connect", function(socket) {

    // 소켓 사용자 이벤트를 연결함 (이벤트 명 : rint)
    socket.on("rint", function (data) {

        // 클라이언트가 전송한 데이타를 출력함.
        console.log("client data : ", data);

        // 소켓 사용자 이벤트를 발생시킴 (이벤트명 : emit)
        socket.emit("smart", data);

    });

});

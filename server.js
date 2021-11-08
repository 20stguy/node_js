// // 서버만들기 7 route와 연결
const http = require("http");
const url = require("url");

function request_server(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + "received from request_server.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("This is from request_server");
    response.end();
    console.log("request_serer has running");
};

function start_server(){
    http.createServer(request_server).listen(8080);
    console.log("start_server has running");
    //request_server()형태로 넣으면 response.writeHead에서 오류가난다.
    //아마 writeHead값이 http.createServer아래있는 함수라 그런듯 한다.
};

// start_server();

// 모듈화
module.exports = {
    start_server
}

// // 서버만들기 7 route와 연결
// // 서버 만들기 9 route 인자로 받기. 비 함수형
// // 설명에 의하면 start함수 안에 모든 함수를 넣었고 이경우 route를 모든 함수에 적용이 가능하다.
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
const url = require("url");

function start(route, handle) {
    function onRequest(request, response){
        const pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname,handle);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    };

    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}

exports.start = start;

// 모듈화
module.exports = {
    start_server
}

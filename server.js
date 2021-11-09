// // 서버 만들기 9 route 인자로 받기. 비 함수형
// // 설명에 의하면 start함수 안에 모든 함수를 넣었고 이경우 route를 모든 함수에 적용이 가능하다.
const http = require("http");
const url = require("url");

function start(route) {
    function onRequest(request, response){
        const pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    };

    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}

exports.start = start;


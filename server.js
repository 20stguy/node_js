//https://poiemaweb.com/nodejs-file-upload-example
// console.log("Hello World");  // 콘솔에 메세지 출력

// // http서버 만들기 1(대기)
// const http = require("http");
// const server = http.createServer();
// server.listen(8080);

// // http서버 만들기 2(대기)
// const http = require("http");
// http.createServer().listen(8080);

// http서버 만들기 3(성공)
// const http = require("http");
// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("This is from createServer"); //브라우저에 메세지 출력
//     response.end();
// }).listen(8080);
// console.log("createServer has started")

// // http서버 만들기 4(성공)
// const http = require("http");
// function onRequest(request, response){
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("This is from onRequest");
//     response.end();
// };
// http.createServer(onRequest).listen(8080);
// console.log("onRequest Server has started.");

// // 서버 만들기 복습(server 변수 처리해서 만들기)
// const http = require("http");
// const server = http.createServer;
// server(function(request, response){
//     response.writeHead(200, {"Content-Type":"text/plain"});
//     response.write("This is from const sever");
//     response.end();
// }).listen(8080);

// // 서버만들기 5(함수형)
const http = require("http");
function request_server(request, response) {
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
start_server();

// 모듈화
exports.export_server = start_server

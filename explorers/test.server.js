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
// const http = require("http");
// function request_server(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("This is from request_server");
//     response.end();
//     console.log("request_serer has running");
// };
// function start_server(){
//     http.createServer(request_server).listen(8080);
//     console.log("start_server has running");
//     //request_server()형태로 넣으면 response.writeHead에서 오류가난다.
//     //아마 writeHead값이 http.createServer아래있는 함수라 그런듯 한다.
// };
// start_server();
// // 모듈화
// exports.export_server = start_server

// // 서버만들기 6 URL path 기준으로 request handler 매핑하는 router 만들기
// let http = require("http");
// let url = require("url");
//
// function request_server(request, response){
//     const pathname = url.parse(request.url).pathname;
//     console.log(JSON.stringify("Path name is " + pathname));
//     const query = url.parse(request.url, true).query;
//     console.log("Request parameter is", query);
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write(
//         "<h1> Path name is " + pathname + "</h1>" +
//         "<h1>Request parameter is " + JSON.stringify(query) + "</h1>"
//     );
//     response.end();
// };
//
// function start_server(){
//     http.createServer(request_server).listen(8080);
//     console.log("This is from test.sever.js start_server");
// }
//
// start_server()
//
// // 모듈화
// exports.export_server = start_server


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


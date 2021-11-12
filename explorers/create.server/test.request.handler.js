function start() {
    console.log("Request handler 'start' was called.");
    return "Hello start from test.request.handler.js";
};

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello upload from test.request.handler.js";
};

module.exports = {
    start,
    upload
}

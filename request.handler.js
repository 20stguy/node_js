function start() {
    console.log("Request handler 'start' was called.");
    return "Hello Start from request.handler.js"
};

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload from request.handler.js"
};

module.exports = {
    start,
    upload
};



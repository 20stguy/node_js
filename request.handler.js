function start() {
    console.log("Request handler 'start' was called.");
    return "Hello Start from request.handler";
};

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload from request.handler."
};

exports.start = start;
exports.upload = upload;

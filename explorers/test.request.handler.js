function start(){
    console.log("Request handler 'start' was called.");
}

function upload(){
    console.log("Request handler 'upload' wa called.");
}

exports.start = start;
exports.upload = upload;
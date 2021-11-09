const server = require("./server");
const router = require("./path.routes");
const reqeusthandler = require("./request.handler");

const handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = reqeusthandler.upload;

server.start(router.route, handle);

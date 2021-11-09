const server = require("./server");
const router = require("./path.routes");
const requesthandlers = require("./request.handler");

const handle = {}
handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;

server.start(router.route, handle);

const server = require("./test.server");
const router = require("./test.routes");
const requesthandlers = require("./test.request.handler");

const handle = {}
handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;

server.start(router.route, handle);

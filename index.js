const server = require("./server");
const router = require("./path.routes");

server.start(router.route);
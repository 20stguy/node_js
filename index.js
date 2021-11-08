const server = require("./server");
const router = require("./path.routes");

server.start_server(router.route);
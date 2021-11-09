const server = require("./test.server");
const route = require("./test.routes");

server.start(route.route);
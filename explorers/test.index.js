const server = require("./test.server");
const route = require("./test.routes");

server.start_server(route.route);
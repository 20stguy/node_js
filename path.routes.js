function route(handle, pathname){
    console.log("This is from test.routes functions route About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "404 Not found from path.routes.js.route";
    };
};

module.exports = {
    route
};
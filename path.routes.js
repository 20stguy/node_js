function route(handle, pathname){
    console.log("This is from routes for " + pathname);
    if (typeof handle[pathname] === 'funciton') {
        handle[pathname]();
    } else {
        console.log("No request hander found for " + pathnmae);
    }
}

module.exports = {
    route
}

const test11 = require("./dependency.server.test")
const test22 = require("./dependency.route.test")

// dependency(의존성)을 통해서 export와 require의 역할을 동시에 할 수 있어 보인다
test11.test1(test22.test2);
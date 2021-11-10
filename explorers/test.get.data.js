const express = require('express');
const app = express();
const PORT = 8080

const myLogger = function(req, res, next) {
    console.log('LOGGED');
    next();
};
app.use(myLogger)

app.get('/', function (req,res){
    res.send('Hello World');
});

app.listen(PORT);
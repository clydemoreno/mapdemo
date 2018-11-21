var express = require('express');
var app = express.createServer();

app.use(express.staticProvider(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(8081, '127.0.0.1')
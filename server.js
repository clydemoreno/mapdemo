var http = require("http");
var fs = require('fs');

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    // fs.readFile(__dirname + '/index.html','utf8',(err,contents)=>{
    //     response.writeHead(200, {'Content-Type': 'text/plain'});
    //     response.end('Hello World\n');

    // })
    
    // Send the response body as "Hello World"


    

 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
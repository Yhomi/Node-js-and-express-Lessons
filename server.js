var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('request was made by:' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});
server.listen(7000, '127.0.0.1');
console.log('now listening to port 7000');


// Impossible to serve html page using this method

// var server = http.createServer(function(req, res) {
//     console.log('request was made by:' + req.url)
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(__dirname + '/index.html');
// });
// server.listen(7000, '127.0.0.1');
// console.log('now listening to port 7000');
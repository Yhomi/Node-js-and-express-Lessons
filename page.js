var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res);
});
server.listen(300, '127.0.0.1');
console.log('Listening on port 300');
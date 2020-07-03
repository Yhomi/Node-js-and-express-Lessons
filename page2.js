var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var readStream = fs.createReadStream(__dirname + '/users.json');
    readStream.pipe(res);
});

server.listen(300, '127.0.0.1');
console.log('Listening on port 300');
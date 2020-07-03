var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/pirate') {
        var pirate = [{ "name": "Zoro", "age": 23 }, { "name": "Sanji", "age": 22 }, { "name": "Ussop", "age": 19 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(pirate));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(300, '127.0.0.1');

console.log('Listening on port 300');
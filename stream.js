var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/sample.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// myReadStream.on('data', (chunk) => {
//     console.log('New chunk of data was received: ');
//     // console.log(chunk);
//     myWriteStream.write(chunk);
// });

// Pipe method
myReadStream.pipe(myWriteStream);
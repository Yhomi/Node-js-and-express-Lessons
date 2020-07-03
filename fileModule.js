var fs = require('fs');

// Synchronous

// Read a file
// var readMe = fs.readFileSync('sample.txt', 'utf8');

// // Write to a file
// fs.writeFileSync('write.txt', readMe);

// console.log(readMe);

// Asynchronous Read and Write

// fs.readFile('sample.txt', 'utf8', function(err, data) {
//     // console.log(data)
//     // Write file asynchronous
//     fs.writeFile('write.txt', data, function(err) {
//         if (err) {
//             throw err;
//         } else {
//             console.log('the file has been saved');
//         }
//     });
// });

// console.log('test');

// // Delete a file
// fs.unlink('write.txt', function(err) {
//     if (err) throw err;
//     console.log('file was deleted');
// });

// Make a directory 
//synchronous method

// fs.mkdirSync('stuff');

// Delete a directory
// Synchronous method
// fs.rmdirSync('stuff');



// Asynchronous way

//Create Directory
// fs.mkdir('stuff', function() {
//     fs.readFile('sample.txt', function(err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data, err => {
//             if (err) throw err;
//             console.log('File has been created in stuff directory');
//         });
//     });
// });

// Remove directory
// if a directory is not empty it wont delete, so you have to delete the files inside first then remove the directory
fs.unlink('./stuff/writeMe.txt', function() {
    fs.rmdir('stuff', function(err) {
        if (err) throw err;
        console.log('The directory has been deleted');
    });
});
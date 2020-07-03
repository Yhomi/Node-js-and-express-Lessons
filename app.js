// console.log('Hello World');

// Global object

// setTimeout(function() {
//     console.log('3 seconds have passed');
// }, 3000);

var time = 0;
// setInterval(function() {
//     time += 2;
//     console.log(time + "seconds have passed");
// }, 2000);

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + 'seconds have passed');
//     if (time > 5) {
//         clearInterval(timer);
//     }
// });

// get the directory 
// console.log(__dirname);

//get the filename as well as the directory
// console.log(__filename);

// Functions

// Normal functions
// function sayHi() {
//     console.log('Hi');
// }
// sayHi();

// Function Expression

// var sayBye = function() {
//         console.log('Bye');
//     }
//     // sayBye();

// // Function in a function

// function callFunction(func) {
//     func();
// }

// callFunction(sayBye);

// Require and Modules

var counter = require('./count');
var stuff = require('./stuff');


console.log(counter([1, 2, 3, 4, 5, 6, 7, 8]));

console.log(stuff.adder(9, 6));

console.log(stuff.cup());
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi, 10));
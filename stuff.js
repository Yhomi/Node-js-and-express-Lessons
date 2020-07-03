var cup = function() {
    return 'This is a cup';
}

var adder = function(a, b) {
    return `The sum of the 2 number is ${a+b}`;
}

var pi = 3.142;

// module.exports.cup = cup;
// module.exports.adder = adder;
// module.exports.pi = pi;

// Another Method

// module.exports.cup = function() {
//     return 'This is a cup';
// }

// module.exports.adder = function(a, b) {
//     return `The sum of the 2 number is ${a+b}`;
// }

// module.exports.pi = 3.142;

// Method 3

module.exports = {
    cup: cup,
    adder: adder,
    pi: pi
};
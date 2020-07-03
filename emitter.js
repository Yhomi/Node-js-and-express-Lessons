var events = require('events');
var util = require('util');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg) {
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'The event emitter works well');

// An Example
var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var luffy = new Person('Luffy');
var naruto = new Person('Naruto');
var zoro = new Person('Zoro');

var people = [luffy, naruto, zoro];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

luffy.emit('speak', 'I am going to be the pirate king');
naruto.emit('speak', 'I am going to be the Hokage');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(3000); // server

// get Route
app.get('/index', function(req, res) {
    res.send('Hello  world! Welcome to node Express');
});

app.get('/contactUs', (req, res) => {
    res.send('This is the contact page');
});

app.get('/api/pirate', function(req, res) {
    res.send('The pirate link is this way');
});

// Route Parameter

app.get('/post/:id', (req, res) => {
    res.send('You are looking for post with the id of ' + req.params.id);
});

// Route to Html pages

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact-us', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Render Views
app.set('view engine', 'ejs');

app.get('/posts/:slug', function(req, res) {
    // passing data
    let data = { title: 'Solo leveling', mc: 'Sung Jin Woo', power: ['shadow extraction', 'shadow exchange', 'hand of god', 'slashing'] }
    res.render('post', { name: req.params.slug, data: data });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

// Use middleware

// app.use('/assets', function(req, res, next) {
//     console.log(req.url);
//     next();
// });

app.use('/assets', express.static('assets'));

// Query string
app.get('/about', (req, res) => {
    console.log(req.query);
    res.sendFile(__dirname + '/lorem.html');

});

app.get('/blog', (req, res) => {
    res.render('blog', { blog: req.query });
});

app.post('/contact', urlencodedParser, (req, res) => {

    console.log(req.body);
    res.render('contact-success', { data: req.body });
});
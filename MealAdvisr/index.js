var colors = require('colors');
var express = require('express');
var app = express();

app.use(express.static('static'));
app.set('json spaces', 2);

var restaurants = ['Som Saa', 'Barbary', 'Tim Spedding @ p-franco', 'Hilton'];
app.get('/restaurants', function (req, res) {
    res.json(restaurants);
});

var reviews = [{ r: 0, d: '2016-10-17' }, { r: 2, d: '2016-10-09' }];
app.get('/reviews', function (req, res) {
    console.log('reviews was requested...'.yellow);
    res.json(reviews);
});

app.listen(8080, function () {
    console.log('Running...');
});
var colors = require('colors');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('json spaces', 2);

app.use(express.static('static'));
app.use(bodyParser.json());

var restaurants = [
    { id: 1, name: 'Som Saa', address: 'Commercial Street' },
    { id: 2, name: 'Honey and Co', address: 'Warren Street' },
    { id: 3, name: 'Barbary', address: 'Neals Yard' }
];
var nextResId = restaurants.length + 1;

app.get('/restaurants', function (req, res) {
    res.json(restaurants);
});


app.get('/restaurants/:id', function (req, res) {
    var id = parseInt(req.params.id);

    var items = restaurants.filter(function (item) {
        return item.id === id;
    });

    if (items.length === 0) {
        res.status(404)
            .json({ message: 'The restaurant was not found' })
            .end();
        return;
    }

    var item = items[0];

    res.json(item);
});

app.post('/restaurants', function (req, res) {
    var restaurant = req.body;
    if (!restaurant.name) {
        res.status(400)
            .json({ message: 'Name must not be empty' })
            .end();
        return;
    }
    restaurant.id = nextResId++;
    restaurants.push(restaurant);
    res.status(201).json(restaurant);
});

app.delete('/restaurants/:id', function (req, res) {
    console.log(req.url.red);
    var id = parseInt(req.params.id);
    console.log(id.toString().red);
    var items = restaurants.filter(function (item) {
        return item.id === id;
    });
    var item = items[0];
    restaurants.splice(restaurants.indexOf(item), 1);
    res.json(item);
});

var reviews = [{ rId: 1, d: '2016-10-17' }, { rId: 2, d: '2016-10-09' }];
app.get('/reviews', function (req, res) {
    console.log('reviews was requested...'.yellow);
    res.json(reviews);
});

app.listen(8080, function () {
    console.log('Running...');
});
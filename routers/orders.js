var express = require('express');
var app = express();
var Orders = require('../app/models/orders');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var create = require('../app/methods/create');
var read = require('../app/methods/read');

app.get('/orders', jsonParser, function(req,res) {
    read({}, function(err, listOfOrders) {
        if (err) {
            res.json(err)
        }
        console.log(listOfOrders);
        res.json(listOfOrders);
    })
})

app.post('/orders', jsonParser, function(req, res) {
    create(req.body, function(err, order) {
        res.json(order);
    });
})

app.post('/orders/remove', jsonParser, function(req, res) {
    Orders.remove({}, function(err) {
        console.log('collection removed');
        res.status(201);
    });
})

module.exports = app;

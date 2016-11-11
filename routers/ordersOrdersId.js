var express = require('express');
var app = express();
var Orders = require('../app/models/orders');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.put('/orders/:order_id', jsonParser, function(req, res) {
    Orders.findByIdAndUpdate(req.params.order_id, {completed: true}, function(err, order) {
        if (err) {
            console.log(err);
        } else {
            res.json(order);
            console.log(order);
            res.status(200);
        }
    })
})

module.exports = app;

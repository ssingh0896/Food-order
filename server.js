var http = require('http');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var getPrevsAndFavs = require('./routers/getPrevsAndFavs');
var orders = require('./routers/orders');


mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

var MongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://amituuush:Gomocha123!@ds139327.mlab.com:39327/gomocha'

mongoose.Promise = global.Promise;
mongoose.connect(MongoURI);


console.log(process.env.MONGODB_URI);


mongoose.connection.once('open', function() {
    console.log('connection established!');
});


/* ----------------------------------------- */

function requestHandler(request, response) {
    response.sendFile(__dirname + '/public/index.html');
}

app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested

app.use('/api', getPrevsAndFavs);
app.use('/api', orders);

app.get('*', requestHandler);

var test = function() {
    console.log('app listening on port 4005');
}

app.listen(process.env.PORT || 4005, test);

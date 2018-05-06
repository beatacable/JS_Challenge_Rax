var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.use('/app', express.static(__dirname + "/app"));


app.get('/', function (req, res) {
 res.sendFile(__dirname +'/app/index.html');

});


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(9998, function () {
    console.log("Listening on port %s...", server.address().port);
});


exports = module.express = app;

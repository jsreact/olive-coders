var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3001, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at http://localhost:3001');
});
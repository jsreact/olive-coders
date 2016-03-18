var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 5000

app.use(express.static(__dirname))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at http://localhost:5000');
});
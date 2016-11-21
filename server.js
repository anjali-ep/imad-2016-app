var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));
});

app.get('/article-2', function (req, res) {
  res.send('Article two  will be available soon');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/bird.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bird.jpg'));
});

app.get('/ui/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});
app.get('/ui/bullet.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bullet.gif'));
});
app.get('/ui/bg_menu.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg_menu.gif'));
});
app.get('/ui/bullet.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bullet.gif'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

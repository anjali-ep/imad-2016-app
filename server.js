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


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/bird.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bird.jpg'));
});

app.get('/ui/coff.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'coff.jpg'));
});

app.get('/ui/in.png', function(req, res){
    //server the static icon file
    res.sendFile(path.join(__dirname, 'ui', 'in.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

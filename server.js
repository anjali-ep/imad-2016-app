var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user:'anjali-ep',
    database:'anjali-ep',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req, res){
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500),send(err.toString());
        } else {
            res.send(JSON.stringify(result.rows));
        }
    });
});

app.get('/articles/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    
pool.query("SELECT * FROM article WHERE title='"+ req.params.articleName + '', function(err,result){
    if(err){
        res.status(500),send(err.toString());
    } else {
        if(result.rows.length === 0){
            res.status(404),send('Article not found');
        }
        else{
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
});
});

app.get('/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
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

app.get('/ui/contact.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.jpg'));
});

app.get('/ui/in.png', function(req, res){
    //server the static icon file
    res.sendFile(path.join(__dirname, 'ui', 'in.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

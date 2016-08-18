var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/client/index.html');
});

app.get('/kardex', function(request, response){
    response.sendFile(__dirname + '/client/kardex.html');
});

app.get('/putameadre', function(request, response){
    response.sendFile(__dirname + '/client/style.css');
});

app.get('/google', function(request, response){
    response.sendFile(__dirname + 'https://www.google.com.mx/');
});
app.get('/404', function (request, response) {
  response.sendFile(__dirname + '/client/404.html');
})

app.get('*', function(request, response){
  response.redirect('/404');
});

app.listen(3000, function(){
  console.log('Running on http://localhost:3000');
});

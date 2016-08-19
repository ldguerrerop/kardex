var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'))

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/client/index.html');
});

app.get('/kardex', function(request, response){
    response.sendFile(__dirname + '/client/kardex.html');
});

app.get('/kardexdavid', function(request, response){
    response.sendFile(__dirname + '/client/kardexdavid.html');
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

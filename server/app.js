var express = require('express');
var app = express();
var students = require('./public/assets/data/class.json')

app.use(express.static(__dirname + '/public'));

app.get('/getStudents', function(request, response) {
    response.send(students);
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/views/index.html')
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/views/stylesheet.css')
});


var server = app.listen(process.env.PORT, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
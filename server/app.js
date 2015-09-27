var express = require('express');
var app = express();
var students = require('./public/assets/data/class.json')

app.use(express.static(__dirname + '/public'));

app.get('/getStudents', function(request, response) {
    response.send(students);
});

app.get('/', function(request, response) {
    response.sendFile(__direname + '/public/views/index.html')
})

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
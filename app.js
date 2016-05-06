#!/usr/local/bin/node
//
// Comments here
//

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
 console.log('Sent index.html')
});

app.get('/favicon.ico', function(req, res){
 res.sendFile(__dirname + '/favicon.ico');
 console.log('Sent favicon.ico')
});

io.on('connection', function(socket){
 socket.on('chat message', function(msg){
   io.emit('chat message', msg);
 });
});

http.listen(port, function(){
 console.log('listening on ' + port);
});

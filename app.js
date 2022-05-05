var express = require('express');
var app = express();
const path = require('path')
var http = require('http');
var fs = require('fs');


app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
   })

app.use('/', express.static(__dirname + '/'))

app.get('/index.html', function(req,res){
    res.sendfile('index.html');
})
app.get('/1.html', function(req,res){
    res.sendfile('1.html');
})
app.get('/2.html', function(req,res){
    res.sendfile('2.html');
})
app.get('/3.html', function(req,res){
    res.sendfile('3.html');
})


app.listen(3000,function(){
    console.log('Example introduction listening on port 3000!');
})
var express = require('express');
var intro = express();

intro.get('/index.html', function(req,res){
    res.sendfile('index.html');
})
intro.get('/1.html', function(req,res){
    res.sendfile('1.html');
})
intro.get('/2.html', function(req,res){
    res.sendfile('2.html');
})
intro.get('/3.html', function(req,res){
    res.sendfile('3.html');
})

intro.listen(3000,function(){
    console.log('Example introduction listening on port 3000!');
})
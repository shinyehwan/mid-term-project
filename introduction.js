var express = require('express');
var intro = express();

intro.get('/', function(req, res){
    res.sendfile('index.html');
})

intro.listen(3000,function(){
    console.log('Example introduction listening on port 3000!');
})
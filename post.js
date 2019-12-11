var express = require('express');
var bodyparser = require('body-parser');
var data = express()
data.use(bodyparser.json())
data.post('/getPost', function(req,res){
let body = req.body;
body.name = 'sivani';
body.age = '22';
res.send(body);
});
data.listen(5000);
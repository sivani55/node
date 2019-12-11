var express = require('express')
var bodyParser = require('body-parser')
var data = express()
data.use(bodyParser.json())
data.get('/getData',function(req,res) {
    const query = req.query
    const name  = query.name;
    const age = query.age;
    res.send('Node js world ' + name + age);
});
data.listen(4000);
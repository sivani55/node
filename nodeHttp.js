var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p> Welcome to Home page </p></body></html>');
        res.end();
    }
    else if(req.url == '/angular'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<html><body><p> welcome to Angular</p></body></html>');
        res.end();
    }
    else{
        res.end('Invalid Request');

    }
}).listen(4500);
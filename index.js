let http = require('http');

let onConnect = function(req, res) {
    res.setHeader('X-Foo', 'bar');

    res.end('ok');
}

let server =  http.createServer(onConnect)

server.listen(3000);







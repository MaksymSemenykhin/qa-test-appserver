let http = require('http');
let parser = require('./parser');

let onConnect = function(req, res) {

    let result = parser.spaceReplacer('123,asd,asdasd !!!');
    res.end(JSON.stringify(result));
}

let server =  http.createServer(onConnect)

server.listen(3000);







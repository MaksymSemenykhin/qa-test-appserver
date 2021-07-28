let http = require('http');
let parser = require('./parser');

let onConnect = function(req, res) {

    parser.setQuery(req.url);

    let result = parser.spaceReplacer();
    res.end(JSON.stringify(result));
}

let server =  http.createServer(onConnect);

server.listen(3000);







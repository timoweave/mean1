var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

    function serve_filename(filename, request, response) {
        fs.readFile(filename, 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    
    if (request.url === '/index.html') {
        serve_filename('index.html', request, response);
    }
    else if (request.url === '/ninjas.html') {
        serve_filename('ninjas.html', request, response);
    }
    else if (request.url === '/dojos/new') {
        serve_filename('dojos.html', request, response);
    }
    else {
        serve_filename('index.html', request, response);
    }
});

server.listen(6789);


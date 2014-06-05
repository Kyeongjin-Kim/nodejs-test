var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello, this is dog.");
	response.end();
}).listen(3000);
console.log('Listening on port 3000...');
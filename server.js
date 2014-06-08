var http = require('http');
var port = process.env.PORT;
//var port = 50002;
http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/plain' });
	response.end('Netbeans node.js Tool Test!!!\n');
}).listen(port);
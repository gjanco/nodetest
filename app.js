const http = require('http');

const port = process.env.PORT || 80;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello, World!\n");

  console.log(`Request made`);
}).listen(port);

console.log(`App is running... (port: ${port})`);
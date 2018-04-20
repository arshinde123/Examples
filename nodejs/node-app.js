// Step 1 - Import Required Module
// We use the require directive to load the http module
// and store the returned HTTP instance into an http variable as follows −

var http = require("http");

// Step 2 - Create Server
// We use the created http instance and call http.createServer() method
// to create a server instance and then we bind it at port 8081
// using the listen method associated with the server instance.
// Pass it a function with parameters request and response.
// Write the sample implementation to always return "Hello World".

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

// The above code is enough to create an HTTP server which listens,
// i.e., waits for a request over 8081 port on the local machine.

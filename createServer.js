const { getCipherInfo } = require("crypto");
var http = require("http");

http
  .createServer(function (req, res) {
    //Send the http header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    res.writeHead(200, { "Content-Type": "text/plain" });

    //Send the response body as "Hello World"
    res.end("Hello World");
  })
  .listen(5050);

//Consol will print the message
console.log("Server running at http://127.0.0.1:5050");

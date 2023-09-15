// Node.js program to demonstrate the 
// response.writeHead() Method

// importing http module
var http = require("http");

// Setting up port
const PORT = process.env.PORT || 8000;

// creating http Server
const httpServer = http.createServer(
    (reqest, response) => {
        const body = 'Hello World';
        // calling response.writeHead method
        response.writeHead(200,{
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/plain'});
        response.end(body);
        });
// Listenining to http server
httpServer.listen(PORT, () => {
    console.log("server is running at port 8000...");
});
                


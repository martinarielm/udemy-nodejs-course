import http from "node:http";

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hello World");
});

server.listen(5000);

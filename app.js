import http from "node:http";

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome to my server!");
});

server.listen(5000);
console.log("Server is running on http://localhost:5000");

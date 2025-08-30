import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end("The Revision Server is Running");
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

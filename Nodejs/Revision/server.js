import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.write("This is some data! \n");
  res.end();
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

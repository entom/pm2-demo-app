const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, World from port: ${process.env.PORT}`);
}

const server = http.createServer(requestListener);

server.listen(process.env.PORT);
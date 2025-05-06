const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public','index.html');
  fs.readFile(filePath, (err, content) => {
      res.writeHead(200); // No Content-Type
      res.end(content);
    });
}).listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));

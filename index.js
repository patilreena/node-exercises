const http = require('http');
const fs = require('fs');
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, () => {
    console.log('Sever is running on' + port);
  });
});

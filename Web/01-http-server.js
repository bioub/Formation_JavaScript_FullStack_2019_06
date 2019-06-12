const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify({ msg: 'Hello' }));
      break;
    case '/coucou':
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify({ msg: 'Coucou' }));
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify({ err: 'Not Found' }));
  }
  res.end();
});

server.on('error', (err) => {
  console.log(err);
});

// server.on('listening', () => {
//     console.log('Server started on port 8000');
// });

server.listen(8000, () => {
  console.log('Server started on port 8000');
});

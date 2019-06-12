const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});

app.get('/coucou', (req, res) => {
  res.json({ msg: 'Coucou !!!' });
});

app.use((req, res) => {
  res.statusCode = 404;
  res.json({ err: 'Not Found' });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});

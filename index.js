const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

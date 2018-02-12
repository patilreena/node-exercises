const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express(); //calling a function

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set a static path
app.use(express.static(path.join(__dirname, 'public')));

//registering the HTTP Handlers or API Handlers
app.get('/', function(req, res) {
  res.send('Hello Express');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
var config = require('./server/config/config');
const app = express();
const port = 3000;

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

// setup the Express middlware
require('./server/middlewares/middleware')(app);

// setup the api routes
require('./server/routes/routes');

app.listen(port, () => {
  console.log('running server on port ' + port);
})

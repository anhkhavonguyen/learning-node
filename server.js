const express = require('express');
var config = require('./server/config/config');
const app = express();

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url, {
  useMongoClient: true
});

// setup the Express middlware
require('./server/middlewares/middleware')(app);

// setup the api routes
require('./server/routes/routes');

app.listen(config.port, () => {
  console.log('running server on port ' + config.port);
})

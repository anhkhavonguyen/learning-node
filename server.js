const express = require('express');
var config = require('./server/config/config');
var router = require('./server/routes/api-routes');
var logger = require('./server/logging/logger');
const app = express();

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url, {
  useMongoClient: true
});

// setup the Express middlware
require('./server/middlewares/middleware')(app);

app.use(require('morgan')({ "stream": logger.stream }));

// setup the routes
app.use("/", router);

logger.info('message info');
logger.error('message error');

app.listen(config.port, () => {
  console.log('running server on port ' + config.port);
})

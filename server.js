const express = require('express');
const app = express();
const port = 3000;

// setup the Express middlware
require('./server/middlewares/middleware')(app);

// setup the api routes
require('./server/routes/routes');

app.listen(port, () => {
  console.log('running server on port ' + port);
})

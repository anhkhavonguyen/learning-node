var express = require('express');
var router = express.Router();
var userRoutes = require('./users');

// router.get('/', function (req, res) {
//     res.send('blah');
//     console.log('Welcome');
//   });

//routes
router.use('/users', userRoutes);

//export
module.exports = router;



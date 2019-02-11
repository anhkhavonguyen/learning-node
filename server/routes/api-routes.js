var express = require('express');
var router = express.Router();
var userRoutes = require('./users');
var postRoutes = require('./posts');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;


